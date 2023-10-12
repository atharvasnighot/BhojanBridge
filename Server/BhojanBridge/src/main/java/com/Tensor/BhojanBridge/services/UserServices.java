package com.Tensor.BhojanBridge.services;

import com.Tensor.BhojanBridge.entities.Users;
import com.Tensor.BhojanBridge.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserServices {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Users> getUsers(){
        return userRepo.findAll();
    }

    public Users createUser(Users user){
        user.setUserId(UUID.randomUUID().toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
}
