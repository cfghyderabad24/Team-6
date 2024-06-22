package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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


    @GetMapping("/applications/{id}/document/{type}")
    public ResponseEntity<byte[]> viewDocument(@PathVariable Long id, @PathVariable String type) {
        Optional<ApplicationForm> optionalApplicationForm = applicationFormService.getApplicationFormById(id);
        if (optionalApplicationForm.isPresent()) {
            ApplicationForm applicationForm = optionalApplicationForm.get();
            byte[] document = null;
            String filename = "";

            switch (type) {
                case "tenthCertificate":
                    document = applicationForm.getTenthCertificate();
                    filename = "10thCertificate.pdf";
                    break;
                case "twelfthCertificate":
                    document = applicationForm.getTwelfthCertificate();
                    filename = "12thCertificate.pdf";
                    break;
                case "bankStatements":
                    document = applicationForm.getBankStatements();
                    filename = "BankStatements.pdf";
                    break;
                case "aadhaarCard":
                    document = applicationForm.getAadhaarCard();
                    filename = "AadhaarCard.pdf";
                    break;
                case "panCard":
                    document = applicationForm.getPanCard();
                    filename = "PanCard.pdf";
                    break;
                case "incomeProof":
                    document = applicationForm.getIncomeProof();
                    filename = "IncomeProof.pdf";
                    break;
                case "currentYearFeeReceipt":
                    document = applicationForm.getCurrentYearFeeReceipt();
                    filename = "CurrentYearFeeReceipt.pdf";
                    break;
                case "feeStructure":
                    document = applicationForm.getFeeStructure();
                    filename = "FeeStructure.pdf";
                    break;
                case "lastYearFeeReceipts":
                    document = applicationForm.getLastYearFeeReceipts();
                    filename = "LastYearFeeReceipts.pdf";
                    break;
                case "essay":
                    document = applicationForm.getEssay();
                    filename = "Essay.pdf";
                    break;
                case "admissionConfirmationLetter":
                    document = applicationForm.getAdmissionConfirmationLetter();
                    filename = "AdmissionConfirmationLetter.pdf";
                    break;
                default:
                    return ResponseEntity.notFound().build();
            }

            if (document != null) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
                        .contentType(MediaType.APPLICATION_PDF)
                        .body(document);
            }
        }
        return ResponseEntity.notFound().build();
    }

}
