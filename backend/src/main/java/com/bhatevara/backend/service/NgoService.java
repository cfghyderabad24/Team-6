package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.Ngo;

import java.util.List;

public interface NgoService {

    public Ngo addNgo(Ngo ngo);
    public Ngo updateNgo(Ngo ngo);
    public Ngo getNgo(String ngoId);
    public List<Ngo> getAllNgos();

}
