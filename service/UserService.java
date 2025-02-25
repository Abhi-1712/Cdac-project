package com.app.service;

import java.util.List;

import com.app.dto.UserDTO;
import com.app.dto.UserPostDTO;
import com.app.entities.Product;

public interface UserService {
//sign up
	//UserDTO signupUser(UserDTO user);
	List <UserDTO> alluser();
	UserDTO getUserById(Long userid);
	String addUser(UserPostDTO userPost);
}
