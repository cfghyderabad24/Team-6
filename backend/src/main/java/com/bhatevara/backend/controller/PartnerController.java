package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PartnerController {

    @Autowired
    private ApplicationFormService applicationFormService;

    @GetMapping("/applications/pending")
    public List<ApplicationForm> getPendingApplications() {
        List<ApplicationForm> pendingApplications = applicationFormService.getPendingApplications();
        return pendingApplications;
    }

    @PostMapping("/applications/{id}/approve")
    public String approveApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
        applicationFormService.updatePngoStatus(id, true, remark);
        return "Success Approving";
    }


    @PostMapping("/applications/{id}/reject")
    public String rejectApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
        applicationFormService.updatePngoStatus(id, false, remark);
        return "Rejection is Done..";
    }


    @GetMapping("/applications/renewal")
    public List<ApplicationForm> getPendingRenewalApplications() {
        List<ApplicationForm> pendingRenewalApplications = applicationFormService.getPendingRenewalApplications();
        return pendingRenewalApplications;
    }

    @PostMapping("/applications/{id}/renewal/approve")
    public String approveRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
        applicationFormService.updatePngoStatus(id, true, remark);
        return "Approved Renewal";
    }

    @PostMapping("/applications/{id}/renewal/reject")
    public String rejectRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark) {
        applicationFormService.updatePngoStatus(id, false, remark);
        return "Rejected Renewal";
    }



}
