package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.Ngo;

import java.util.List;

public interface NgoService {

    public Ngo addNgo(Ngo ngo);
    public Ngo updateNgo(Ngo ngo);

    Ngo getNgo(Ngo ngoname);

    public List<Ngo> getAllNgos();

    public String deletebyname(Ngo ngoname);

    public Ngo findByEmail(String email);

}
