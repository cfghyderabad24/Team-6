package com.bhatevara.backend.repository;


import com.bhatevara.backend.entity.ApplicationForm;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ApplicationFormRepository extends JpaRepository<ApplicationForm, Long> {
    List<ApplicationForm> findByPngoStatusFalse();
    List<ApplicationForm> findByPngoStatusTrueAndVolunteerStatusFalse();
}

