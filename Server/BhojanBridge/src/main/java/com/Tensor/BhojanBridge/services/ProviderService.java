package com.Tensor.BhojanBridge.services;

import com.Tensor.BhojanBridge.entities.ProviderPost;
import com.Tensor.BhojanBridge.repositories.ProviderPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderService {

    @Autowired
    private ProviderPostRepo providerPostRepo;

    public List<ProviderPost> getAllProviderPosts(){
        return providerPostRepo.findAll();
    }

}
