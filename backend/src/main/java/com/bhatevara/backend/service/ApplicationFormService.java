package com.bhatevara.backend.service;

import com.bhatevara.backend.entity.ApplicationForm;
import com.bhatevara.backend.repository.ApplicationFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationFormService {
    @Autowired
    private ApplicationFormRepository applicationFormRepository;

    public ApplicationForm saveApplicationForm(ApplicationForm applicationForm) {
        return applicationFormRepository.save(applicationForm);
    }

    public Optional<ApplicationForm> getApplicationFormById(Long id) {
        return applicationFormRepository.findById(id);
    }

    public List<ApplicationForm> getAllApplicationForms() {
        return applicationFormRepository.findAll();
    }

    public void deleteApplicationForm(Long id) {
        applicationFormRepository.deleteById(id);
    }

}
