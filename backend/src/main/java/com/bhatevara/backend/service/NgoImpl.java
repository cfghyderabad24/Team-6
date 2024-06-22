package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.Ngo;
import com.bhatevara.backend.repository.Ngorepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NgoImpl implements NgoService{

    @Autowired
    private Ngorepo ngorepo;

    @Override
    public Ngo addNgo(Ngo ngo) {
        return ngorepo.save(ngo);
    }

    @Override
    public Ngo updateNgo(Ngo ngo) {

        return null;
    }

    @Override
    public Ngo getNgo(Ngo ngoname) {
        return null;
    }

    @Override
    public List<Ngo> getAllNgos() {
        return ngorepo.findAll();
    }

    @Override
    public String deletebyname(Ngo ngoname) {
       return null;

    }

    @Override
    public Ngo findByEmail(String email) {
        return null;
    }

}
