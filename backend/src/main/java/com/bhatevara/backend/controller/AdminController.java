package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private ApplicationFormService applicationFormService;




    @GetMapping("/applicationSuccess")
    public String applicationSuccess() {
        return "applicationSuccess";
    }

//    @GetMapping("/applications/pending")
//    public String getPendingApplications(Model model) {
//        List<ApplicationForm> pendingApplications = applicationFormService.getPendingApplications();
//        model.addAttribute("applications", pendingApplications);
//        return "pendingApplications";
//    }



//    @PostMapping("/applications/{id}/reject")
//    public String rejectApplication(@PathVariable Long id, @RequestParam("remark") String remark, Model model) {
//        applicationFormService.updatePngoStatus(id, false, remark);
//        return "redirect:/admin/applications/pending";
//    }


//    @GetMapping("/applications/volunteer")
//    public String getApplicationsReadyForVolunteer(Model model) {
//        List<ApplicationForm> readyApplications = applicationFormService.getApplicationsReadyForVolunteer();
//        model.addAttribute("applications", readyApplications);
//        return "volunteerPendingApplications";
//    }

//    @PostMapping("/applications/{id}/verify")
//    public String verifyApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status, Model model) {
//        applicationFormService.updateVolunteerStatus(id, status, remark);
//        return "redirect:/admin/applications/volunteer";
//    }

    //final
//    @GetMapping("/applications/final")
//    public String getApplicationsForFinalDecision(Model model) {
//        List<ApplicationForm> finalApplications = applicationFormService.getApplicationsForFinalDecision();
//        model.addAttribute("applications", finalApplications);
//        return "finalDecisionApplications";
//    }

//    @PostMapping("/applications/{id}/finalize")
//    public String finalizeApplication(
//            @PathVariable Long id,
//            @RequestParam("decision") String decision,
//            @RequestParam("remark") String remark,
//            @RequestParam("amount") double amount,
//            @RequestParam("chequeNumber") String chequeNumber,
//            @RequestParam("chequeDate") String chequeDate,
//            @RequestParam("chequePayee") String chequePayee,
//            Model model) {
//        applicationFormService.updateFinalDecision(id, decision, remark, amount, chequeNumber, chequeDate, chequePayee);
//        return "redirect:/admin/applications/final";
//    }




//    @GetMapping("/applications/{id}/document/{type}")
//    public ResponseEntity<byte[]> viewDocument(@PathVariable Long id, @PathVariable String type) {
//        Optional<ApplicationForm> optionalApplicationForm = applicationFormService.getApplicationFormById(id);
//        if (optionalApplicationForm.isPresent()) {
//            ApplicationForm applicationForm = optionalApplicationForm.get();
//            byte[] document = null;
//            String filename = "";
//
//            switch (type) {
//                case "tenthCertificate":
//                    document = applicationForm.getTenthCertificate();
//                    filename = "10thCertificate.pdf";
//                    break;
//                case "twelfthCertificate":
//                    document = applicationForm.getTwelfthCertificate();
//                    filename = "12thCertificate.pdf";
//                    break;
//                case "bankStatements":
//                    document = applicationForm.getBankStatements();
//                    filename = "BankStatements.pdf";
//                    break;
//                case "aadhaarCard":
//                    document = applicationForm.getAadhaarCard();
//                    filename = "AadhaarCard.pdf";
//                    break;
//                case "panCard":
//                    document = applicationForm.getPanCard();
//                    filename = "PanCard.pdf";
//                    break;
//                case "incomeProof":
//                    document = applicationForm.getIncomeProof();
//                    filename = "IncomeProof.pdf";
//                    break;
//                case "currentYearFeeReceipt":
//                    document = applicationForm.getCurrentYearFeeReceipt();
//                    filename = "CurrentYearFeeReceipt.pdf";
//                    break;
//                case "feeStructure":
//                    document = applicationForm.getFeeStructure();
//                    filename = "FeeStructure.pdf";
//                    break;
//                case "lastYearFeeReceipts":
//                    document = applicationForm.getLastYearFeeReceipts();
//                    filename = "LastYearFeeReceipts.pdf";
//                    break;
//                case "essay":
//                    document = applicationForm.getEssay();
//                    filename = "Essay.pdf";
//                    break;
//                case "admissionConfirmationLetter":
//                    document = applicationForm.getAdmissionConfirmationLetter();
//                    filename = "AdmissionConfirmationLetter.pdf";
//                    break;
//                default:
//                    return ResponseEntity.notFound().build();
//            }
//
//            if (document != null) {
//                return ResponseEntity.ok()
//                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
//                        .contentType(MediaType.APPLICATION_PDF)
//                        .body(document);
//            }
//        }
//        return ResponseEntity.notFound().build();
//    }


    @GetMapping("/applications/final")
    public List<ApplicationForm> getApplicationsForFinalDecision() {
        List<ApplicationForm> finalApplications = applicationFormService.getApplicationsForFinalDecision();
        return finalApplications;
    }

    @PostMapping("/applications/{id}/finalize")
    public String finalizeApplication(
            @PathVariable Long id,
            @RequestParam("decision") String decision,
            @RequestParam("remark") String remark,
            @RequestParam("amount") double amount,
            @RequestParam("chequeNumber") String chequeNumber,
            @RequestParam("chequeDate") String chequeDate,
            @RequestParam("chequePayee") String chequePayee) {
        applicationFormService.updateFinalDecision(id, decision, remark, amount, chequeNumber, chequeDate, chequePayee);
        return "Finalized successed...";
    }

    @GetMapping("/applications/renewal/volunteer")
    public String getRenewalApplicationsReadyForVolunteer(Model model) {
        List<ApplicationForm> renewalApplications = applicationFormService.getRenewalApplicationsReadyForVolunteer();
        model.addAttribute("applications", renewalApplications);
        return "volunteerPendingRenewalApplications";
    }

    @PostMapping("/applications/{id}/renewal/verify")
    public String verifyRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status, Model model) {
        applicationFormService.updateVolunteerStatus(id, status, remark);
        return "redirect:/admin/applications/renewal/volunteer";
    }



    // New methods for NGO validation
    @GetMapping("/applications/ngo")
    public String getApplicationsForNgo(Model model) {
        List<ApplicationForm> ngoApplications = applicationFormService.getPendingApplications();
        model.addAttribute("applications", ngoApplications);
        return "ngoPendingApplications";
    }

    @PostMapping("/applications/{id}/ngoApprove")
    public String ngoApproveApplication(@PathVariable Long id, @RequestParam("remark") String remark, Model model) {
        applicationFormService.updatePngoStatus(id, true, remark);
        return "redirect:/admin/applications/ngo";
    }

    @PostMapping("/applications/{id}/ngoReject")
    public String ngoRejectApplication(@PathVariable Long id, @RequestParam("remark") String remark, Model model) {
        applicationFormService.updatePngoStatus(id, false, remark);
        return "redirect:/admin/applications/ngo";
    }
}
