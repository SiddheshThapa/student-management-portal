package com.student.portal.repository;

import com.student.portal.model.DepartmentStudentCount;
import com.student.portal.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query("SELECT d.name as departmentName, COUNT(s.id) as studentCount " +
            "FROM Student s JOIN s.department d GROUP BY d.name")
    List<DepartmentStudentCount> countStudentsByDepartment();
}
