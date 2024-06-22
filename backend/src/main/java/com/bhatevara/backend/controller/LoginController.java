package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.Admin;
import com.bhatevara.backend.entity.Partner;
import com.bhatevara.backend.entity.Volunteer;
import com.bhatevara.backend.repository.AlumniRepo;
import com.bhatevara.backend.service.Alumniservice;
import com.bhatevara.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    Alumniservice alumniservice;

    @PostMapping("/alumni")
    public ResponseEntity<Boolean> alumniLogin(@RequestParam String email, @RequestParam String password) {
        Admin admin = loginService.validateAdmin(email);
        if (admin != null) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/admin")
    public ResponseEntity<String> adminLogin(@RequestBody Admin admin) {

        Admin temp = loginService.validateAdmin(admin.getUsername());
        if (temp != null) {
            if (temp.getPassword().equals(admin.getPassword())) {
                return ResponseEntity.ok("Success");
            }

        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Failed");
        }
    }

    @PostMapping("/partner")
    public ResponseEntity<String> partnerLogin(@RequestBody Partner partner) {
        Partner temp = loginService.validatePartner(partner.getEmail());
        if (temp != null) {
            if(partner.getPassword().equals(temp.getPassword())) {
                return ResponseEntity.ok("Success");
            }

        } else {
            return ResponseEntity.ok("Failed");
        }
    }

    @PostMapping("/volunteer")
    public ResponseEntity<String> volunteerLogin(@RequestBody Volunteer volunteer) {
        Volunteer temp = loginService.validateVolunteer(volunteer.getEmail());
        if (temp != null) {
            if (temp.getPassword().equals(volunteer.getPassword())) {
                return ResponseEntity.ok("Success");
            }
        }


            return ResponseEntity.ok("Failed");

    }
}
