package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.NGO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NGORepo extends JpaRepository<NGO,Long> {
    //no code needed
}
