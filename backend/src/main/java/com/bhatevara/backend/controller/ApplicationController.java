// src/main/java/com/bhatevara/backend/controller/ApplicationController.java
package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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
            @RequestParam(value = "formNumber", required = false) String formNumber,
            @RequestParam(value = "studentName", required = false) String studentName,
            @RequestParam(value = "courseName", required = false) String courseName,
            @RequestParam(value = "courseDuration", required = false) Integer courseDuration,
            @RequestParam(value = "currentYear", required = false) Integer currentYear,
            @RequestParam(value = "instituteName", required = false) String instituteName,
            @RequestParam(value = "affiliatedUniversity", required = false) String affiliatedUniversity,
            @RequestParam(value = "currentYearFee", required = false) Double currentYearFee,
            @RequestParam(value = "fatherName", required = false) String fatherName,
            @RequestParam(value = "motherName", required = false) String motherName,
            @RequestParam(value = "postalAddress", required = false) String postalAddress,
            @RequestParam(value = "city", required = false) String city,
            @RequestParam(value = "pin", required = false) String pin,
            @RequestParam(value = "state", required = false) String state,
            @RequestParam(value = "whatsappNumber", required = false) String whatsappNumber,
            @RequestParam(value = "alternateMobile", required = false) String alternateMobile,
            @RequestParam(value = "email", required = false) String email,
            @RequestParam(value = "bankAccountNumber", required = false) String bankAccountNumber,
            @RequestParam(value = "panCardFile", required = false) MultipartFile panCardFile,
            @RequestParam(value = "incomeProofFile", required = false) MultipartFile incomeProofFile,
            @RequestParam(value = "tenthCertificateFile", required = false) MultipartFile tenthCertificateFile,
            @RequestParam(value = "twelfthCertificateFile", required = false) MultipartFile twelfthCertificateFile,
            @RequestParam(value = "bankStatementsFile", required = false) MultipartFile bankStatementsFile,
            @RequestParam(value = "currentYearFeeReceiptFile", required = false) MultipartFile currentYearFeeReceiptFile,
            @RequestParam(value = "feeStructureFile", required = false) MultipartFile feeStructureFile,
            @RequestParam(value = "lastYearFeeReceiptsFile", required = false) MultipartFile lastYearFeeReceiptsFile,
            @RequestParam(value = "essayFile", required = false) MultipartFile essayFile,
            @RequestParam(value = "aadhaarCardFile", required = false) MultipartFile aadhaarCardFile,
            @RequestParam(value = "admissionConfirmationLetterFile", required = false) MultipartFile admissionConfirmationLetterFile,
            @RequestParam(value = "isRenewal", required = false) Boolean isRenewal,
            @RequestParam(value = "lastYearCourseName", required = false) String lastYearCourseName,
            @RequestParam(value = "lastYearInstitute", required = false) String lastYearInstitute,
            @RequestParam(value = "lastYearAffiliatedUniversity", required = false) String lastYearAffiliatedUniversity,
            @RequestParam(value = "lastYearFeePaid", required = false) Double lastYearFeePaid,
            @RequestParam(value = "lastYearScholarshipAmount", required = false) Double lastYearScholarshipAmount) throws IOException {

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
        applicationForm.setPanCard(panCardFile != null ? panCardFile.getBytes() : null);
        applicationForm.setIncomeProof(incomeProofFile != null ? incomeProofFile.getBytes() : null);
        applicationForm.setTenthCertificate(tenthCertificateFile != null ? tenthCertificateFile.getBytes() : null);
        applicationForm.setTwelfthCertificate(twelfthCertificateFile != null ? twelfthCertificateFile.getBytes() : null);
        applicationForm.setBankStatements(bankStatementsFile != null ? bankStatementsFile.getBytes() : null);
        applicationForm.setCurrentYearFeeReceipt(currentYearFeeReceiptFile != null ? currentYearFeeReceiptFile.getBytes() : null);
        applicationForm.setFeeStructure(feeStructureFile != null ? feeStructureFile.getBytes() : null);
        applicationForm.setLastYearFeeReceipts(lastYearFeeReceiptsFile != null ? lastYearFeeReceiptsFile.getBytes() : null);
        applicationForm.setEssay(essayFile != null ? essayFile.getBytes() : null);
        applicationForm.setAadhaarCard(aadhaarCardFile != null ? aadhaarCardFile.getBytes() : null);
        applicationForm.setAdmissionConfirmationLetter(admissionConfirmationLetterFile != null ? admissionConfirmationLetterFile.getBytes() : null);
        applicationForm.setRenewal(isRenewal != null ? isRenewal : false);
        applicationForm.setLastYearCourseName(lastYearCourseName);
        applicationForm.setLastYearInstitute(lastYearInstitute);
        applicationForm.setLastYearAffiliatedUniversity(lastYearAffiliatedUniversity);
        applicationForm.setLastYearFeePaid(lastYearFeePaid);
        applicationForm.setLastYearScholarshipAmount(lastYearScholarshipAmount);

        applicationFormService.saveApplicationForm(applicationForm);

        return ResponseEntity.ok("Success");
    }


    @GetMapping("/getPdf/{id}/document/{type}")
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


    @PostMapping("/approve/{id}")
    public String approveApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
        applicationFormService.updatePngoStatus(id, true, remark);
        return "redirect:/admin/applications/pending";
    }

    @GetMapping("/renewal")
    public ResponseEntity<List<ApplicationForm>> getPendingRenewalApplications() {
        List<ApplicationForm> pendingRenewalApplications = applicationFormService.getPendingRenewalApplications();
        return ResponseEntity.ok(pendingRenewalApplications);
    }
}
