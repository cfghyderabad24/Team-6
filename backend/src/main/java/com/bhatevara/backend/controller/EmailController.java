package com.bhatevara.backend.controller;

import com.bhatevara.backend.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mailing")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("/send-email/interview")
    public ResponseEntity<String> sendEmail(
            @RequestParam("to") String to,
            @RequestParam("subject") String subject,
            @RequestParam("body") String body) {
        emailSenderService.sendEmail(to, subject, body);
        return ResponseEntity.ok("Success");
    }
}
