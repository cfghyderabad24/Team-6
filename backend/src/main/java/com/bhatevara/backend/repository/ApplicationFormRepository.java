package com.bhatevara.backend.repository;


import com.bhatevara.backend.entity.ApplicationForm;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ApplicationFormRepository extends JpaRepository<ApplicationForm, Long> {
    List<ApplicationForm> findByPngoStatusFalse();
    List<ApplicationForm> findByVolunteerStatusTrueAndBoardStatusFalse();

    List<ApplicationForm> findByPngoStatusTrueAndVolunteerStatusFalse();

    List<ApplicationForm> findByIsRenewalAndPngoStatusAndVolunteerStatus(boolean isRenewal, boolean pngoStatus, boolean volunteerStatus);


    List<ApplicationForm> findByIsRenewalAndPngoStatus(boolean b, boolean b1);

    List<ApplicationForm> findByIsRenewalAndVolunteerStatusAndBoardStatus(boolean b, boolean b1, boolean b2);
}

