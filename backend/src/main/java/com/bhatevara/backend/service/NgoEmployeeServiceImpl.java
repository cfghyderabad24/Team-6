package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.NgoEmployee;
import com.bhatevara.backend.repository.NgoEmployeeRepo;
import com.bhatevara.backend.repository.Ngorepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NgoEmployeeServiceImpl implements NgoEmployeeService{

    @Autowired
    private NgoEmployeeRepo ngoEmployeeRepo;
    @Override
    public NgoEmployee addNgoEmployee(NgoEmployee ngoEmployee) {
        return ngoEmployeeRepo.save(ngoEmployee);
    }
}
