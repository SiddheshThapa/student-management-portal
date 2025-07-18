                AWS Cloud Deployment (Free Tier)
This project is fully deployed on AWS Free Tier using a secure and scalable architecture. Below is a summary of services used and setup steps:

              Services Used were -
              
Service	                          Purpose

EC2	                             A virtual server (t3.micro - Free Tier) used to host and run the Spring Boot JAR file.
RDS                              Managed MySQL database service used to store student records and department data.
S3	                             Used for frontend hosting. The React build/ folder was uploaded to S3 for public access as a static website.
IAM Roles	                       Secure access control where i created 2 roles of s3fullaccess and ec2full acces and attached them to EC2
CloudWatch	                     Used for monitoring logs. Alternatively, logs can also be manually viewed via SSH terminal into EC2.
GitHub Actions	                 Used for CI/CD pipeline to automatically deploy updated backend code to EC2 whenever changes are pushed to the GitHub repository.
VPC                              EC2 resides in public subnet (with internet access) and RDS resides in private subnet (not publicly accessible)
