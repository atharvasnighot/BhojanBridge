package com.Tensor.BhojanBridge.repositories;

import com.Tensor.BhojanBridge.entities.ProviderPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProviderPostRepo extends JpaRepository<ProviderPost, Integer> {

    @Override
    Optional<ProviderPost> findById(Integer integer);
}
