package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.Admin;
import com.bhatevara.backend.entity.Partner;
import com.bhatevara.backend.entity.Volunteer;
import com.bhatevara.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping("/admin")
    public String showAdminLoginPage() {
        return "adminLogin";
    }

    @PostMapping("/admin")
    public String adminLogin(@RequestParam String username, @RequestParam String password) {
        Admin admin = loginService.validateAdmin(username, password);
        if (admin != null) {
            return "Success";
        } else {
            return "Failed to Success";
        }
    }


    @GetMapping("/partner")
    public String showPartnerLoginPage() {
        return "partnerLogin";
    }

    @PostMapping("/partner")
    public String partnerLogin(@RequestParam String username, @RequestParam String password) {
        Partner partner = loginService.validatePartner(username, password);
        if (partner != null) {
            return "Partner Login Success";
        } else {
            return "Partner Login Failed";
        }
    }

    @GetMapping("/volunteer")
    public String showVolunteerLoginPage() {
        return "volunteerLogin";
    }

    @PostMapping("/volunteer")
    public String volunteerLogin(@RequestParam String username, @RequestParam String password) {
        Volunteer volunteer = loginService.validateVolunteer(username, password);
        if (volunteer != null) {
            return "Volunteer Login Success";
        } else {
            return "Volunteer fail in login";
        }
    }
}
