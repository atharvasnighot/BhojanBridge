package com.Tensor.BhojanBridge.entities;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "provider_post")
public class ProviderPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String organisationName;
    private Date timeOfMaking;
    private int feedCapacity = 0;
    private String imageUrl;
    private double latitude;
    private double longitude;
    private String foodDescription;
    private boolean nonVeg = false;



}
