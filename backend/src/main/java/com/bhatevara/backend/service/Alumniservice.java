package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.Alumni;
import com.bhatevara.backend.entity.NGO;
import com.bhatevara.backend.repository.AlumniRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Alumniservice {

    @Autowired
    AlumniRepo alumniRepo;

    public Optional<Alumni> findByEmail(String email) {
        return Optional.ofNullable(alumniRepo.findByemail(email));
    }
}
