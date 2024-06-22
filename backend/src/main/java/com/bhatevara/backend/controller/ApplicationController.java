package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
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
    private ApplicationFormService applicationFormService;

//    @GetMapping("/form")
//    public String showForm() {
//        return "applicationForm"; // This returns the applicationForm.html Thymeleaf template
//    }
//

    @GetMapping("/application-form")
    public String showForm(Model model) {
        model.addAttribute("applicationForm", new ApplicationForm());
        return "applicationForm";
    }

    @PostMapping("/application-form")
    public String submitForm(@ModelAttribute ApplicationForm applicationForm,
                             @RequestParam("twelvethCertFile") MultipartFile twelvethCertFile,
                             @RequestParam("feeStructureFile") MultipartFile feeStructureFile) throws IOException {
        applicationForm.setTwelveth_cert(twelvethCertFile.getBytes());
        applicationForm.setFee_structure(feeStructureFile.getBytes());
        applicationFormService.AddForm(applicationForm);
        return "redirect:/application-form?success";
    }

}
