package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.UserDTO;
import com.app.dto.UserPostDTO;
import com.app.entities.UserEntity;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserEntityRepository userEntityRepository;
	@Autowired
	private ModelMapper modelMapper;
//	@Autowired
//	private PasswordEncoder encoder;
	
	@Override
	public UserDTO getUserById(Long userId) {
		UserEntity user =userEntityRepository.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
		
		return modelMapper.map(user, UserDTO.class); 
	}

	@Override
	public String addUser(UserPostDTO userPostDTO) {
		
		
		
		        if (userEntityRepository.existsByEmail(userPostDTO.getEmail())) {
		            throw new RuntimeException("Email already exists!");
		        }
		        
		        if (userEntityRepository.existsByPhone(userPostDTO.getPhone())) {
		            throw new RuntimeException("Phone number already exists!");
		        }
		        UserEntity user   = modelMapper.map(userPostDTO, UserEntity.class);
//		 user.setPasswordHash(passwordEncoder.encode(userDTO.getPassword()));
		 userEntityRepository.save(user);
		 
		return  " user is saved ";
	}
	

	@Override
	public List<UserDTO> alluser() {
		
//		
		
		return userEntityRepository.findAll().stream()
	            .map(userEntity -> modelMapper.map(userEntity, UserDTO.class))
	            .collect(Collectors.toList());
	}
	
	

//	@Override
//	public UserDTO signupUser(UserDTO dto) {
//		//1. map DTO -> entity
//		UserEntity user=modelMapper.map(dto, UserEntity.class);
//		//2. encode password
//		user.setPassword(encoder.encode(user.getPassword()));
//		//3. save
//		UserEntity persistentUser = userEntityRepository.save(user);
//		return modelMapper.map(persistentUser, UserDTO.class);
//	}

}
