package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.NGO;
import com.bhatevara.backend.entity.Partner;
import com.bhatevara.backend.repository.NGORepo;
import com.bhatevara.backend.repository.PartnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PartnerService {

    @Autowired
    public PartnerRepo partnerRepo;


    public List<Partner> findAll() {
        return partnerRepo.findAll();
    }

    public Optional<Partner> findById(Long id) {
        return partnerRepo.findById(id);
    }

    public void save(Partner partner) {
        partnerRepo.save(partner);
    }

    public void delete(Long id) {
        partnerRepo.deleteById(id);
    }

}
