package com.bhatevara.backend.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/apis/admin")
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

//    @Autowired
//    UserService userService;
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getAllUsers() {
//        try {
//            List<User> users = userService.finadAll();
//
//            if (users.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//
//            return new ResponseEntity<>(users, HttpStatus.OK);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
