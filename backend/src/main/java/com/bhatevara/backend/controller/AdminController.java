package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.entity.NGO;
import com.bhatevara.backend.entity.Partner;
import com.bhatevara.backend.entity.Volunteer;
import com.bhatevara.backend.service.ApplicationFormService;
import com.bhatevara.backend.service.PartnerService;
import com.bhatevara.backend.service.VolunteerService;
import com.bhatevara.backend.service.ngoservice;
import jakarta.mail.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
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

//    @GetMapping("/applications/renewal/volunteer")
//    public String getRenewalApplicationsReadyForVolunteer(Model model) {
//        List<ApplicationForm> renewalApplications = applicationFormService.getRenewalApplicationsReadyForVolunteer();
//        model.addAttribute("applications", renewalApplications);
//        return "volunteerPendingRenewalApplications";
//    }

//    @PostMapping("/applications/{id}/renewal/verify")
//    public String verifyRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status, Model model) {
//        applicationFormService.updateVolunteerStatus(id, status, remark);
//        return "redirect:/admin/applications/renewal/volunteer";
//    }



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



    // Methods for handling renewal applications

//    @GetMapping("/applications/renewal")
//    public List<ApplicationForm> getPendingRenewalApplications() {
//        List<ApplicationForm> pendingRenewalApplications = applicationFormService.getPendingRenewalApplications();
//        return pendingRenewalApplications;
//    }
//
//    @PostMapping("/applications/{id}/renewal/approve")
//    public String approveRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
//        applicationFormService.updatePngoStatus(id, true, remark);
//        return "Approved Renewal";
//    }
//
//    @PostMapping("/applications/{id}/renewal/reject")
//    public String rejectRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
//        applicationFormService.updatePngoStatus(id, false, remark);
//        return "Rejected Renewal";
//    }

//    @GetMapping("/applications/renewal/volunteer")
//    public List<ApplicationForm> getRenewalApplicationsReadyForVolunteer() {
//        List<ApplicationForm> renewalApplications = applicationFormService.getRenewalApplicationsReadyForVolunteer();
//        return renewalApplications;
//    }
//
//    @PostMapping("/applications/{id}/renewal/verify")
//    public String verifyRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status) {
//        applicationFormService.updateVolunteerStatus(id, status, remark);
//        return "Volunteer Verified";
//    }

    @GetMapping("/applications/renewal/final")
    public List<ApplicationForm> getRenewalApplicationsForFinalDecision() {
        List<ApplicationForm> renewalFinalApplications = applicationFormService.getRenewalApplicationsForFinalDecision();
        return renewalFinalApplications;
    }

    @PostMapping("/applications/{id}/renewal/finalize")
    public String finalizeRenewalApplication(
            @PathVariable Long id,
            @RequestParam("decision") String decision,
            @RequestParam("remark") String remark,
            @RequestParam("amount") double amount,
            @RequestParam("chequeNumber") String chequeNumber,
            @RequestParam("chequeDate") String chequeDate,
            @RequestParam("chequePayee") String chequePayee) {
        applicationFormService.updateFinalDecision(id, decision, remark, amount, chequeNumber, chequeDate, chequePayee);
        return "Accepted by NGO";
    }



































    //this code is need to be updated please wait ...


    @Autowired
    private ngoservice ngoService;

    @Autowired
    private PartnerService partnerService;


    @Autowired
    private VolunteerService volunteerService;

    @GetMapping("/allngos")
    public List<NGO> getallngos(){
        return ngoService.getall();
    }

    @GetMapping("/findbyidngo/{id}")
    public Optional<NGO> getbyidngo(@PathVariable Long id){
        return ngoService.findById(id);
    }

    @GetMapping("/savengo")
    public ResponseEntity<String> savengo(NGO ngo){
        ngoService.save(ngo);

        return ResponseEntity.ok("Success");
    }

    @GetMapping("/deletebyidngo/{id}")
    public ResponseEntity<String> deletebyid(@PathVariable Long id){
        ngoService.delete(id);
        return ResponseEntity.ok("Deleted");
    }




    @GetMapping("/allpartners")
    public List<Partner> getallpartners(){
        return partnerService.findAll();
    }

    @GetMapping("/findbyidpar/{id}")
    public Optional<Partner> getbyidpartener(@PathVariable Long id){
        return partnerService.findById(id);
    }

    @GetMapping("/savepartner")
    public ResponseEntity<String> savengo(Partner partner){
        partnerService.save(partner);

        return ResponseEntity.ok("Success");
    }

    @GetMapping("/deletebyidpar/{id}")
    public ResponseEntity<String> deletebyidpartner(@PathVariable Long id){
        partnerService.delete(id);
        return ResponseEntity.ok("Deleted");
    }










    @GetMapping("/allvolunteers")
    public List<Volunteer> getallvol(){
        return volunteerService.findAll();
    }

    @GetMapping("/findbyidvol/{id}")
    public Optional<Volunteer> getbyidvol(@PathVariable Long id){
        return volunteerService.findById(id);
    }

    @GetMapping("/savevol")
    public ResponseEntity<String> savevol(Volunteer vol){
        volunteerService.save(vol);

        return ResponseEntity.ok("Success");
    }

    @GetMapping("/deletebyidvol/{id}")
    public ResponseEntity<String> deletebyidvol(@PathVariable Long id){
        volunteerService.delete(id);
        return ResponseEntity.ok("Deleted");
    }
}
