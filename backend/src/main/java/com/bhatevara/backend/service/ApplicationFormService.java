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

    public List<ApplicationForm> getPendingApplications() {
        return applicationFormRepository.findByPngoStatusFalse();
    }

    public void updatePngoStatus(Long id, boolean status, String remark) {
        applicationFormRepository.findById(id).ifPresent(applicationForm -> {
            applicationForm.setPngoStatus(status);
            applicationForm.setPngoRemark(remark);
            applicationFormRepository.save(applicationForm);
        });
    }

    public List<ApplicationForm> getApplicationsReadyForVolunteer() {
        return applicationFormRepository.findByPngoStatusTrueAndVolunteerStatusFalse();
    }

    public void updateVolunteerStatus(Long id, boolean status, String remark) {
        applicationFormRepository.findById(id).ifPresent(applicationForm -> {
            applicationForm.setVolunteerStatus(status);
            applicationForm.setVolunteerRemark(remark);
            applicationFormRepository.save(applicationForm);
        });
    }

    public List<ApplicationForm> getApplicationsForFinalDecision() {
        return applicationFormRepository.findByVolunteerStatusTrueAndBoardStatusFalse();
    }

    public void updateFinalDecision(Long id, String decision, String remark, double amount, String chequeNumber, String chequeDate, String chequePayee) {
        applicationFormRepository.findById(id).ifPresent(applicationForm -> {
            applicationForm.setBoardStatus(true);
            applicationForm.setFinalDecision(decision);
            applicationForm.setFinalDecisionRemark(remark);
            applicationForm.setScholarshipAmount(amount);
            applicationForm.setChequeNumber(chequeNumber);
            applicationForm.setChequeDate(chequeDate);
            applicationForm.setChequePayee(chequePayee);
            applicationFormRepository.save(applicationForm);
        });
    }


    public List<ApplicationForm> getRenewalApplicationsReadyForVolunteer() {
        return applicationFormRepository.findByIsRenewalAndPngoStatusAndVolunteerStatus(true, true, false);
    }

    public List<ApplicationForm> getPendingRenewalApplications() {
        return applicationFormRepository.findByIsRenewalAndPngoStatus(false, false);
    }

    public List<ApplicationForm> getRenewalApplicationsForFinalDecision() {
        return applicationFormRepository.findByIsRenewalAndVolunteerStatusAndBoardStatus(true, true, false);
    }

//    public List<ApplicationForm> getRenewalApplicationsReadyForVolunteer() {
//        return applicationFormRepository.findByIsRenewalAndPngoStatusAndVolunteerStatus(true, true, false);
//    }

//    public List<ApplicationForm> getRenewalApplicationsReadyForVolunteer() {
//        return applicationFormRepository.findByIsRenewalTrueAndPngoStatusTrueAndVolunteerStatusFalse();
//    }
}
