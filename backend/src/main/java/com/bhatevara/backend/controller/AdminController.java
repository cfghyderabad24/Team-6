package com.bhatevara.backend.controller;

<<<<<<< HEAD


=======
>>>>>>> 4ff06117e3d4e65540f7b43f24d368af584d9576
import com.bhatevara.backend.entity.Ngo;
import com.bhatevara.backend.entity.NgoEmployee;
import com.bhatevara.backend.entity.User;
import com.bhatevara.backend.service.NgoEmployeeService;
import com.bhatevara.backend.service.NgoService;
import com.bhatevara.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

<<<<<<< HEAD
    
    
=======
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
>>>>>>> 4ff06117e3d4e65540f7b43f24d368af584d9576
}
