package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.Partner;
import com.bhatevara.backend.entity.Volunteer;
import com.bhatevara.backend.repository.PartnerRepo;
import com.bhatevara.backend.repository.Volunteerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VolunteerService {

    @Autowired
    public Volunteerrepo volunteerrepo;


    public List<Volunteer> findAll() {
        return volunteerrepo.findAll();
    }

    public Optional<Volunteer> findById(Long id) {
        return volunteerrepo.findById(id);
    }

    public void save(Volunteer volunteer) {
        volunteerrepo.save(volunteer);
    }

    public void delete(Long id) {
        volunteerrepo.deleteById(id);
    }

    public Volunteer finByEmail(String email) {
        return volunteerrepo.findByemail(email);
    }

}
