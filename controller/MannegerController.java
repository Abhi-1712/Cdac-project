package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.dto.UserPostDTO;
import com.app.service.UserService;

import jakarta.validation.Valid;

public class MannegerController {


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/manager")

public class UserController {
	@Autowired
	private UserService userService;
	
	
	 @GetMapping("/{id}")
	    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
	        return ResponseEntity.ok(userService.getUserById(id));
	    }
	 
	 @PostMapping("/add")
		public  ResponseEntity<?> addProduct(@RequestBody  @Valid UserPostDTO userPostDTO) {
			return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.addUser(userPostDTO));
}
