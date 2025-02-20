package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PartnerRepo extends JpaRepository<Partner,Long> {
    Partner findByemail(String email);
}
