package com.bhatevara.backend.controller;


import com.bhatevara.backend.entity.Ngo;
import com.bhatevara.backend.entity.NgoEmployee;
import com.bhatevara.backend.entity.User;
import com.bhatevara.backend.service.NgoEmployeeService;
//import com.bhatevara.backend.service.NgoService;
import com.bhatevara.backend.service.NgoService;
import com.bhatevara.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apis/admin")
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


    @PostMapping("/addNgoEmployee")
    public ResponseEntity<NgoEmployee> addNgoEmployee(@RequestBody NgoEmployee ngoEmployee) {
        return ResponseEntity.ok(ngoEmployeeService.addNgoEmployee(ngoEmployee));
    }


    // @Autowired
    // UserService userService;
    // @GetMapping("/users")
    // public ResponseEntity<List<User>> getAllUsers() {
    // try {
    // List<User> users = userService.finadAll();
    //
    // if (users.isEmpty()) {
    // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
    //
    // return new ResponseEntity<>(users, HttpStatus.OK);
    // } catch (Exception e) {
    // e.printStackTrace();
    // return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // }
    // }

}
