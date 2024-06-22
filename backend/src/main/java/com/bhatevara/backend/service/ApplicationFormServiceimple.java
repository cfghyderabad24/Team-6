package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.repository.ApplicationFormRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationFormServiceimple implements ApplicationFormService{

    ApplicationFormRepo applicationFormRepo;

    public ApplicationFormServiceimple(ApplicationFormRepo applicationFormRepo){
        this.applicationFormRepo = applicationFormRepo;
    }

    @Override
    public ApplicationForm AddForm(ApplicationForm r) {

          return applicationFormRepo.save(r);
    }
}
