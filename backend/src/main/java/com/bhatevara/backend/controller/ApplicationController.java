package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.repository.applicationformrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationController {



    @PostMapping("/submitForm")
    public ResponseEntity<ApplicationForm> submitForm(@RequestBody ApplicationForm form) {
        return ResponseEntity.ok(form);
    }
}
