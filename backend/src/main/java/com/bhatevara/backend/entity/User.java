package com.bhatevara.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private Long id;
    private String username;
    private String email;
    private String password;
    private String role;


}
