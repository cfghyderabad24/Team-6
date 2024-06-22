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

    public Admin validateAdmin(String username, String password) {
        Admin admin = adminRepository.findByUsername(username);
        if (admin != null && admin.getPassword().equals(password)) {
            return admin;
        }
        return null;
    }

    public Partner validatePartner(String username, String password) {
        Partner partner = partnerRepository.findByemail(username);
        if (partner != null && partner.getPassword().equals(password)) {
            return partner;
        }
        return null;
    }

    public Volunteer validateVolunteer(String email, String password) {
        Volunteer volunteer = volunteerRepository.findByemail(email);
        if (volunteer != null && volunteer.getPassword().equals(password)) {
            return volunteer;
        }
        return null;
    }
}