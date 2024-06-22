package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.Alumni;
import com.bhatevara.backend.entity.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlumniRepo extends JpaRepository<Alumni,String> {
    Alumni findByusername(String username);
}
