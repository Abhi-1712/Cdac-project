package com.app.dto;


import java.time.LocalDate;

import org.hibernate.validator.constraints.Range;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter

public class UserPostDTO  extends BaseDTO{
	
	
    private String firstName;


    private String lastName;

   
    private String email;
    private String password;

   
    private String phone;

  
    private LocalDate dateOfBirth;

    private String address;

  
   

}
