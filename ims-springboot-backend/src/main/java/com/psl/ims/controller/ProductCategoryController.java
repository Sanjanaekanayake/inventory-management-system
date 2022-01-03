package com.psl.ims.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.psl.ims.entity.ProductCategory;
import com.psl.ims.service.ProductCategoryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductCategoryController {
	
	@Autowired
	private ProductCategoryService productCategoryService;

	public ProductCategoryController(ProductCategoryService productCategoryService) {
		super();
		this.productCategoryService = productCategoryService;
	}
	
			
		@GetMapping("/categories")
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public List<ProductCategory> listCategories()
		{
			return productCategoryService.getAllProductCategories();
		}
		
		
		@PostMapping("/categories")
		@PreAuthorize("hasRole('ADMIN')")
		public ProductCategory saveCategory(@RequestBody ProductCategory productCategory)
		{			
			return productCategoryService.saveProductCategory(productCategory);
			
		}
		
		
		@PutMapping("/categories/{id}")
		@PreAuthorize("hasRole('ADMIN')")
		public ResponseEntity<ProductCategory> updateCategory(@PathVariable Long id, @RequestBody ProductCategory productCategory) 
		
		{
						
			ProductCategory existingCategory = productCategoryService.getProductCategoryById(id);
			existingCategory.setId(id);
			existingCategory.setCategory_name(productCategory.getCategory_name());
			existingCategory.setQuantity(productCategory.getQuantity());
			existingCategory.setStatus(productCategory.getStatus());
			
			
			ProductCategory category = productCategoryService.updateProductCategory(existingCategory);
			return ResponseEntity.ok(category);
	     					
		}

		
		@GetMapping("/categories/{id}")
		@PreAuthorize("hasRole('ADMIN')")
		public ResponseEntity<ProductCategory> getCategoryById(@PathVariable Long id) {
			
			ProductCategory category = productCategoryService.getProductCategoryById(id);
			return ResponseEntity.ok(category);
			
		}
		
		@DeleteMapping("/categories/{id}")
		@PreAuthorize("hasRole('ADMIN')")
		public void deleteCategory(@PathVariable Long id) {
			
			productCategoryService.deleteProductCategoryById(id);
			
		}
		
		
		
		 

}
