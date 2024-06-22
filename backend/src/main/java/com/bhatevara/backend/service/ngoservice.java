package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.NGO;
import com.bhatevara.backend.repository.NGORepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ngoservice {

    @Autowired
    public NGORepo ngoRepository;


    public List<NGO> getall() {
        return ngoRepository.findAll();
    }

    public Optional<NGO> findById(Long id) {
        return ngoRepository.findById(id);
    }

    public void save(NGO ngo) {
        ngoRepository.save(ngo);
    }

    public void delete(Long id) {
        ngoRepository.deleteById(id);
    }

}
