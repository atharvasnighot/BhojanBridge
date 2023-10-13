package com.Tensor.BhojanBridge.entities;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.sql.Time;

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
    private Time timeOfMaking;
    private Date dateOfMaking;
    private int feedCapacity = 0;
    private String imageUrl;
    private double latitude;
    private double longitude;
    private String locality;
    private String foodDescription;
    private String foodCategory;
    private boolean nonVeg = false;



}
