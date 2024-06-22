package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.Admin;
import com.bhatevara.backend.entity.NGO;
import com.bhatevara.backend.entity.Partner;
import com.bhatevara.backend.entity.Volunteer;
import com.bhatevara.backend.repository.AdminRepository;
import com.bhatevara.backend.repository.NGORepo;
import com.bhatevara.backend.repository.PartnerRepo;
import com.bhatevara.backend.repository.Volunteerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PartnerRepo partnerRepository;

    @Autowired
    private Volunteerrepo volunteerRepository;

    public Admin validateAdmin(String username) {
        Admin admin = adminRepository.findByUsername(username);

            return admin;

    }

    public Partner validatePartner(String username) {
        Partner partner = partnerRepository.findByemail(username);

            return partner;

    }

    public Volunteer validateVolunteer(String email) {
        Volunteer volunteer = volunteerRepository.findByemail(email);

        return volunteer;
    }
}