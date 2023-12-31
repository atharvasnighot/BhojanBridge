package com.Tensor.BhojanBridge.controller;

import com.Tensor.BhojanBridge.entities.Users;
import com.Tensor.BhojanBridge.models.JwtRequest;
import com.Tensor.BhojanBridge.models.JwtResponse;
import com.Tensor.BhojanBridge.repositories.UserRepo;
import com.Tensor.BhojanBridge.security.JwtHelper;
import com.Tensor.BhojanBridge.services.UserServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JwtHelper helper;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserServices userServices;

    private Logger logger = LoggerFactory.getLogger(AuthController.class);


    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

        this.doAuthenticate(request.getEmail(), request.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            manager.authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid !!";
    }

    @PostMapping("/register")
    public Users createUser(@RequestBody Users user){
        System.out.println("Registering New User");
        return userServices.createUser(user);
    }

    @GetMapping("/isProvider/{username}")
    public boolean isProvider(@PathVariable String username){
        Users user = userRepo.findByEmail(username).get();
        String prov = "Provider";
        if(prov.equals(user.getCategory())){
            return true;
        }
        else
            return false;
    }
}
