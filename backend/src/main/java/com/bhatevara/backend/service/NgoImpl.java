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
        Ngo n1 = ngorepo.findbyEmail(ngo.getEmail());
        if (n1 != null) {
            n1.setAddress(ngo.getAddress());
            n1.setCity(ngo.getCity());
            n1.setPhone(ngo.getPhone());
            return ngorepo.save(n1);
        } else {
            // Handle the case
            return null;
        }
    }

    @Override
    public Ngo getNgo(Ngo ngoname) {
        Ngo n1 = ngorepo.findbyName(ngoname.getName());
        if (n1 != null) {
           return n1;
        } else {
            // Handle the case
            return null;
        }
    }

    @Override
    public List<Ngo> getAllNgos() {
        return ngorepo.findAll();
    }

    @Override
    public String deletebyname(Ngo ngoname) {
        Ngo n1 = ngorepo.findbyName(ngoname.getName());
        if (n1 != null) {
            ngorepo.delete(n1);
            return "success";
        } else {
            // Handle the case
            return null;
        }
    }

}
