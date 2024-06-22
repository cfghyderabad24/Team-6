package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Volunteerrepo extends JpaRepository<Volunteer,Long> {
    Volunteer findByemail(String email);
}
