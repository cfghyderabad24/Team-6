package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private ApplicationFormService applicationFormService;

    @GetMapping("/applications/new")
    public String showApplicationForm(Model model) {
        model.addAttribute("applicationForm", new ApplicationForm());
        return "applicationForm";
    }

    @PostMapping("/applications")
    public String saveApplicationForm(
            @ModelAttribute ApplicationForm applicationForm,
            @RequestParam("panCardFile") MultipartFile panCardFile,
            @RequestParam("incomeProofFile") MultipartFile incomeProofFile,
            @RequestParam("tenthCertificateFile") MultipartFile tenthCertificateFile,
            @RequestParam("twelfthCertificateFile") MultipartFile twelfthCertificateFile,
            @RequestParam("bankStatementsFile") MultipartFile bankStatementsFile,
            @RequestParam("currentYearFeeReceiptFile") MultipartFile currentYearFeeReceiptFile,
            @RequestParam("feeStructureFile") MultipartFile feeStructureFile,
            Model model) throws IOException {

        applicationForm.setPanCard(panCardFile.getBytes());
        applicationForm.setIncomeProof(incomeProofFile.getBytes());
        applicationForm.setTenthCertificate(tenthCertificateFile.getBytes());
        applicationForm.setTwelfthCertificate(twelfthCertificateFile.getBytes());
        applicationForm.setBankStatements(bankStatementsFile.getBytes());
        applicationForm.setCurrentYearFeeReceipt(currentYearFeeReceiptFile.getBytes());
        applicationForm.setFeeStructure(feeStructureFile.getBytes());

        applicationFormService.saveApplicationForm(applicationForm);
        model.addAttribute("applications", applicationFormService.getAllApplicationForms());
        return "applications";
    }
}
