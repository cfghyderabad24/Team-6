package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.Ngo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface ngorepo extends JpaRepository<Ngo, Long> {
    //need no code here tooo.
}
