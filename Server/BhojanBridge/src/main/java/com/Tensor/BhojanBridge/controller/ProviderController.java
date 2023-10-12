package com.Tensor.BhojanBridge.controller;

import com.Tensor.BhojanBridge.entities.ProviderPost;
import com.Tensor.BhojanBridge.repositories.ProviderPostRepo;
import com.Tensor.BhojanBridge.services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/provider")
public class ProviderController {

    @Autowired
    private ProviderPostRepo providerPostRepo;

    @Autowired
    private ProviderService providerService;

    @PostMapping("/create-post")
    public String createProviderPost(@RequestBody ProviderPost providerPost){
        System.out.println("Creating Provider Post on the Platform");
        providerPostRepo.save(providerPost);
        return "Creating Provider Post on the Platform";
    }

    @GetMapping("/all-current")
    public String getAllProviderPosts(){
        System.out.println("Creating Provider Post on the Platform");
        providerService.getAllProviderPosts();
        return "Creating Provider Post on the Platform";
    }

}
