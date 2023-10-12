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

    public List<ProviderPost> getPostsAbove(int feedCapacity){
        System.out.println("Returning all Posts above" + feedCapacity);
        return providerPostRepo.findByFeedCapacityGreaterThan(feedCapacity);
    }

    public String reduceFeedCapacity(Integer id, int feeds) {
        ProviderPost providerPost = providerPostRepo.findById(id).get();

        if (providerPost != null && providerPost.getFeedCapacity() >= feeds ) {
            int newFeedCapacity = providerPost.getFeedCapacity() - feeds;

            if (newFeedCapacity <= 0) {
                providerPostRepo.deleteById(id);
            } else {
                providerPost.setFeedCapacity(newFeedCapacity);
                providerPostRepo.save(providerPost);
            }
            return "Reducing Feeds Capacity by " + feeds;
        }
        return "Not Possible";
    }



}
