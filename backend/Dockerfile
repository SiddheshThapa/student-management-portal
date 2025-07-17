# Stage 1: Build the Spring Boot app using Maven
FROM maven:3.9.4-eclipse-temurin-17 AS builder

# Set working directory inside container
WORKDIR /app

# Copy the portal project into container
COPY portal /app

# Build the project
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot app using a JDK image
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy the built jar file from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose port (make sure matches your backend's server.port)
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
