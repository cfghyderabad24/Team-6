package com.bhatevara.backend.controller;


import com.bhatevara.backend.entity.Ngo;
import com.bhatevara.backend.entity.NgoEmployee;
import com.bhatevara.backend.entity.User;
import com.bhatevara.backend.service.NgoEmployeeService;
import com.bhatevara.backend.service.NgoService;
import com.bhatevara.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private NgoService ngoService;

    @Autowired
    private UserService userService;

    @Autowired
    private NgoEmployeeService ngoEmployeeService;


    @PostMapping("/addVolunteer")
    public ResponseEntity<User> addVolunteer(@RequestBody User user) {
        return ResponseEntity.ok(userService.addUser(user));
    }

    @PostMapping("/addNgo")
    public ResponseEntity<Ngo> addNgo(@RequestBody Ngo ngo) {
       return ResponseEntity.ok(ngoService.addNgo(ngo));
    }

    @GetMapping("/getAllNgos")
    public ResponseEntity<List<Ngo>> getAllNgos() {
        return ResponseEntity.ok(ngoService.getAllNgos());
    }

    @PostMapping("/addNgoEmployee")
    public ResponseEntity<NgoEmployee> addNgoEmployee(@RequestBody NgoEmployee ngoEmployee) {
        return ResponseEntity.ok(ngoEmployeeService.addNgoEmployee(ngoEmployee));
    }



}
