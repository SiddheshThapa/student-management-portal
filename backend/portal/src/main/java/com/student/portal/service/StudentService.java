package com.student.portal.service;

import com.student.portal.model.Department;
import com.student.portal.model.DepartmentStudentCount;
import com.student.portal.model.Student;
import com.student.portal.repository.DepartmentRepository;
import com.student.portal.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final DepartmentRepository departmentRepository;


    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }


    public Student saveStudentWithDepartment(Student student) {
            if (student.getDepartment() != null && student.getDepartment().getId() != null) {
                Long deptId = student.getDepartment().getId();
                Department department = departmentRepository.findById(deptId)
                        .orElseThrow(() -> new RuntimeException("Department not found with id: " + deptId));
                student.setDepartment(department);
            } else {
                throw new RuntimeException("Department ID is missing in student payload.");
            }

            return studentRepository.save(student);

    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }


    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }


    public List<DepartmentStudentCount> getStudentCountPerDepartment() {
        return studentRepository.countStudentsByDepartment();
    }

    public Page<Student> getAllStudentsPage(Pageable pageable) {
        return studentRepository.findAll(pageable);
    }

}
