package com.bhatevara.backend.controller;

import com.bhatevara.backend.entity.User;
import com.bhatevara.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.addUser(user));
    }

    @PostMapping("/allUsers")
    public ResponseEntity<List<User>> allUsers() {
        return ResponseEntity.ok(userService.finadAll());
    }



}
