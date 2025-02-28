package com.app.entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users") // Specify table name
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "passwordHash")
public class UserEntity extends BaseEntity {

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;
    
    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;
    
    @Column(length = 100, unique = true, nullable = false)
    private String email;
    
    @Column(name = "password", length = 255, nullable = false)
    private String password;
    
    @Column(length = 15, unique = true, nullable = false)
    private String phone;
    
    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;
    
    @Column(length = 255)
    private String address;
    
    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    
   
}