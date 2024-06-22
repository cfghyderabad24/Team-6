package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/volunteer")
public class VolunteerController {

    @Autowired
    private ApplicationFormService applicationFormService;


    @GetMapping("/applications/volunteer")
    public ResponseEntity<List<ApplicationForm>> getApplicationsReadyForVolunteer() {
        List<ApplicationForm> readyApplications = applicationFormService.getApplicationsReadyForVolunteer();
        System.out.println(readyApplications);
        return ResponseEntity.ok(readyApplications);
    }

    @PostMapping("/applications/{id}/verify")
    public String verifyApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status) {
        applicationFormService.updateVolunteerStatus(id, status, remark);
        return "Success Verification";
    }


    @GetMapping("/getById/{id}")
    public ResponseEntity<ApplicationForm> getById(@PathVariable Long id) {
        return ResponseEntity.ok(applicationFormService.getApplicationFormById(id).get());
    }

    @GetMapping("/applications/renewal/volunteer")
    public List<ApplicationForm> getRenewalApplicationsReadyForVolunteer() {
        List<ApplicationForm> renewalApplications = applicationFormService.getRenewalApplicationsReadyForVolunteer();
        return renewalApplications;
    }

    @PostMapping("/applications/{id}/renewal/verify")
    public String verifyRenewalApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status) {
        applicationFormService.updateVolunteerStatus(id, status, remark);
        return "Volunteer Verified";
    }


}
