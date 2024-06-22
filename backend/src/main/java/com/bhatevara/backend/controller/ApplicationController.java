// src/main/java/com/bhatevara/backend/controller/ApplicationController.java
package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationFormService applicationFormService;

    @GetMapping("/allapps")
    public List<ApplicationForm> getAll() {
        return applicationFormService.getAllApplicationForms();
    }

    @PostMapping("/submitApplication")
    public ResponseEntity<String> saveApplicationForm(
            @RequestParam("formNumber") String formNumber,
            @RequestParam("studentName") String studentName,
            @RequestParam("courseName") String courseName,
            @RequestParam("courseDuration") int courseDuration,
            @RequestParam("currentYear") int currentYear,
            @RequestParam("instituteName") String instituteName,
            @RequestParam("affiliatedUniversity") String affiliatedUniversity,
            @RequestParam("currentYearFee") double currentYearFee,
            @RequestParam("fatherName") String fatherName,
            @RequestParam("motherName") String motherName,
            @RequestParam("postalAddress") String postalAddress,
            @RequestParam("city") String city,
            @RequestParam("pin") String pin,
            @RequestParam("state") String state,
            @RequestParam("whatsappNumber") String whatsappNumber,
            @RequestParam("alternateMobile") String alternateMobile,
            @RequestParam("email") String email,
            @RequestParam("bankAccountNumber") String bankAccountNumber,
            @RequestParam("panCardFile") MultipartFile panCardFile,
            @RequestParam("incomeProofFile") MultipartFile incomeProofFile,
            @RequestParam("tenthCertificateFile") MultipartFile tenthCertificateFile,
            @RequestParam("twelfthCertificateFile") MultipartFile twelfthCertificateFile,
            @RequestParam("bankStatementsFile") MultipartFile bankStatementsFile,
            @RequestParam("currentYearFeeReceiptFile") MultipartFile currentYearFeeReceiptFile,
            @RequestParam("feeStructureFile") MultipartFile feeStructureFile,
            @RequestParam("lastYearFeeReceiptsFile") MultipartFile lastYearFeeReceiptsFile,
            @RequestParam("essayFile") MultipartFile essayFile,
            @RequestParam("aadhaarCardFile") MultipartFile aadhaarCardFile,
            @RequestParam("admissionConfirmationLetterFile") MultipartFile admissionConfirmationLetterFile,
            @RequestParam("isRenewal") boolean isRenewal) throws IOException {

        ApplicationForm applicationForm = new ApplicationForm();
        applicationForm.setFormNumber(formNumber);
        applicationForm.setStudentName(studentName);
        applicationForm.setCourseName(courseName);
        applicationForm.setCourseDuration(courseDuration);
        applicationForm.setCurrentYear(currentYear);
        applicationForm.setInstituteName(instituteName);
        applicationForm.setAffiliatedUniversity(affiliatedUniversity);
        applicationForm.setCurrentYearFee(currentYearFee);
        applicationForm.setFatherName(fatherName);
        applicationForm.setMotherName(motherName);
        applicationForm.setPostalAddress(postalAddress);
        applicationForm.setCity(city);
        applicationForm.setPin(pin);
        applicationForm.setState(state);
        applicationForm.setWhatsappNumber(whatsappNumber);
        applicationForm.setAlternateMobile(alternateMobile);
        applicationForm.setEmail(email);
        applicationForm.setBankAccountNumber(bankAccountNumber);
        applicationForm.setPanCard(panCardFile.getBytes());
        applicationForm.setIncomeProof(incomeProofFile.getBytes());
        applicationForm.setTenthCertificate(tenthCertificateFile.getBytes());
        applicationForm.setTwelfthCertificate(twelfthCertificateFile.getBytes());
        applicationForm.setBankStatements(bankStatementsFile.getBytes());
        applicationForm.setCurrentYearFeeReceipt(currentYearFeeReceiptFile.getBytes());
        applicationForm.setFeeStructure(feeStructureFile.getBytes());
        applicationForm.setLastYearFeeReceipts(lastYearFeeReceiptsFile.getBytes());
        applicationForm.setEssay(essayFile.getBytes());
        applicationForm.setAadhaarCard(aadhaarCardFile.getBytes());
        applicationForm.setAdmissionConfirmationLetter(admissionConfirmationLetterFile.getBytes());
        applicationForm.setRenewal(isRenewal);

        applicationFormService.saveApplicationForm(applicationForm);
        return ResponseEntity.ok("Success");
    }
}
