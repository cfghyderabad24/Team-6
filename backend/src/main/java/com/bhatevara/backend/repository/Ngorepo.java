package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.Ngo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ngorepo extends JpaRepository<Ngo, Long> {
    Ngo findbyEmail(String email);

    Ngo findbyName(String name);
}
