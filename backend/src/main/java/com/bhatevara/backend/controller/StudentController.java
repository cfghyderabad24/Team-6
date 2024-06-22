package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.Event;
import com.bhatevara.backend.entity.Student;
import com.bhatevara.backend.service.EventService;
import com.bhatevara.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private EventService eventService;

    @GetMapping("/students")
    public String listStudents(Model model) {
        List<Student> students = studentService.getAllStudents();
        model.addAttribute("students", students);
        return "students";
    }

    @GetMapping("/students/new")
    public String showNewStudentForm(Model model) {
        List<Event> events = eventService.getAllEvents();
        model.addAttribute("student", new Student());
        model.addAttribute("events", events);
        return "newStudent";
    }

    @PostMapping("/students/save")
    public String saveStudent(@ModelAttribute Student student) {
        studentService.saveStudent(student);
        return "redirect:/students";
    }

    @GetMapping("/students/edit/{id}")
    public String showEditStudentForm(@PathVariable Long id, Model model) {
        Student student = studentService.getStudentById(id);
        List<Event> events = eventService.getAllEvents();
        model.addAttribute("student", student);
        model.addAttribute("events", events);
        return "editStudent";
    }

    @PostMapping("/students/update/{id}")
    public String updateStudent(@PathVariable Long id, @ModelAttribute Student student) {
        student.setId(id);
        studentService.saveStudent(student);
        return "redirect:/students";
    }
}