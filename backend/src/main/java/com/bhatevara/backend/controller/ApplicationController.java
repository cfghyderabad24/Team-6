package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.repository.ApplicationFormRepo;
import com.bhatevara.backend.service.ApplicationFormService;
import com.bhatevara.backend.service.ApplicationFormServiceimple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/apis/bhatevara")
public class ApplicationController {

    @Autowired
    ApplicationFormServiceimple applicationFormService;

    @GetMapping("/application-form")
    public String showForm(Model model) {
        model.addAttribute("applicationForm", new ApplicationForm());
        return "applicationForm";
    }

}
