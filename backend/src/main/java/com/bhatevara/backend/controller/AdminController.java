package com.bhatevara.backend.controller;


import com.bhatevara.backend.entity.Ngo;
import com.bhatevara.backend.entity.User;
import com.bhatevara.backend.service.NgoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private NgoService ngoService;

    @PostMapping("/addVolunteer")
    public User addVolunteer(User user) {
        return user;
    }

    @PostMapping("/addNgo")
    public Ngo addNgo(Ngo ngo) {
       return ngoService.addNgo(ngo);
    }

    @GetMapping("/getAllNgos")
    public List<Ngo> getAllNgos() {
        return ngoService.getAllNgos();
    }


}
