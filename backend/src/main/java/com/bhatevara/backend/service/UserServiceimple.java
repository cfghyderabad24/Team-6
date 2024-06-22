package com.bhatevara.backend.service;

import com.bhatevara.backend.Exception.ResourceNotFoundException;
import com.bhatevara.backend.entity.User;
import com.bhatevara.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;

@Service
public class UserServiceimple implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findById(Long id) {
       return null;
    }

    @Override
    public User findByEmail(String email) {
        return null;
    }

    @Override
    public List<User> finadAll() {
        return null;
    }
}
