package com.bhatevara.backend.repository;


import com.bhatevara.backend.entity.ApplicationForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationFormRepository extends JpaRepository<ApplicationForm, Long> {
}

