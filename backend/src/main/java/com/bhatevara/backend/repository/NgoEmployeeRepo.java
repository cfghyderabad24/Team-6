package com.bhatevara.backend.repository;

import com.bhatevara.backend.entity.NgoEmployee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NgoEmployeeRepo extends JpaRepository<NgoEmployee, Long> {
}
