package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.ApplicationForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface applicationformrepo extends JpaRepository<ApplicationForm,String> {
    //if needed lets implement some methods...

}
