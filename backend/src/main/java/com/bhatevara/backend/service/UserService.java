package com.bhatevara.backend.service;


import com.bhatevara.backend.entity.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);

    public User findById(Long id);

    public User findByEmail(String email);

    public List<User> finadAll();

}
