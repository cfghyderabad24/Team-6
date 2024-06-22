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
@CrossOrigin("*")
public class ApplicationController {

    @Autowired
    private ApplicationFormService applicationFormService;


    @GetMapping("/allapps")
    public List<ApplicationForm> getall(){
        return applicationFormService.getAllApplicationForms();
    }


    @PostMapping("/applications")
    public ResponseEntity<String> saveApplicationForm(
            @RequestBody ApplicationForm applicationForm,
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
