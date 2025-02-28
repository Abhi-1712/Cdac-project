package com.app.entities;


import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
 // Table name in the database
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Mannager extends BaseEntity { // Assuming BaseEntity contains the primary key

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;

    @Column(length = 100, unique = true, nullable = false)
    private String email;

    @Column(length = 50, nullable = false)
    private String department;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}