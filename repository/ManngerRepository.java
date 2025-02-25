package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Mannager;



public interface ManngerRepository extends JpaRepository<Mannager, Long> {

	
}