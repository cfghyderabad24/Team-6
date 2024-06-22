package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class VolunteerController {

    @Autowired
    private ApplicationFormService applicationFormService;


    @GetMapping("/applications/volunteer")
    public List<ApplicationForm> getApplicationsReadyForVolunteer() {
        List<ApplicationForm> readyApplications = applicationFormService.getApplicationsReadyForVolunteer();
        return readyApplications;
    }

    @PostMapping("/applications/{id}/verify")
    public String verifyApplication(@PathVariable Long id, @RequestParam("remark") String remark, @RequestParam("status") boolean status) {
        applicationFormService.updateVolunteerStatus(id, status, remark);
        return "Success Verification";
    }



}
