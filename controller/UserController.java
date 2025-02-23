package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductDTO;
import com.app.dto.UserDTO;
import com.app.dto.UserPostDTO;
import com.app.entities.Category;
import com.app.service.UserService;

import jakarta.validation.Valid;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")

public class UserController {
	@Autowired
	private UserService userService;
	
	
	 @GetMapping("/{id}")
	    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
	        return ResponseEntity.ok(userService.getUserById(id));
	    }
	 
	 @PostMapping("/add")
		public  ResponseEntity<?> addUser(@RequestBody  @Valid UserPostDTO userPostDTO) {
			return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.addUser(userPostDTO));
	 
	 
}
	 @GetMapping("/view")
		public ResponseEntity<?> viewalluser() {
			return ResponseEntity.ok
					(userService.alluser());
		}
}


	// any one should be able view the products w/o authentication -permit all
//	@GetMapping("/view")
//	public ResponseEntity<?> viewProducts() {
//		return ResponseEntity.ok
//				(productService.getAllProducts());
//	}
//
//	// any authenticated user should be able to browse the categories
//	@GetMapping("/browse_categories")
//	public  ResponseEntity<?>browseCategories() {
//		return ResponseEntity.ok
//				(Category.values());
//	}
//
//	// customer should be able to purchase products
//	@PutMapping("/purchase/{id}/{qty}")
//	public ResponseEntity<?> purchaseProducts(@PathVariable Long id,
//			@PathVariable int qty) {
//		return ResponseEntity.ok
//				(productService.purchase(id,qty));
//	}
//
//	// admin should be able to add the products
//	@PostMapping("/add")
//	public  ResponseEntity<?> addProduct(@RequestBody  @Valid ProductDTO product) {
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(productService.addProduct(product));
//	}
//
//	// admin should be able to delete the products	
//	@DeleteMapping("/delete/{id}")
//	public ResponseEntity<?> deleteProducts(@PathVariable Long id) {
//		return ResponseEntity.ok
//				(productService.deleteProductDetails(id));