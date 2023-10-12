package com.Tensor.BhojanBridge.controller;

import com.Tensor.BhojanBridge.entities.ProviderPost;
import com.Tensor.BhojanBridge.repositories.ProviderPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/provider")
public class ProviderController {

    @Autowired
    private ProviderPostRepo providerPostRepo;

    @PostMapping("/create-post")
    public String createProviderPost(@RequestBody ProviderPost providerPost){
        System.out.println("Creating Provider Post on the Platform");
        providerPostRepo.save(providerPost);
        return "Creating Provider Post on the Platform";
    }
}
