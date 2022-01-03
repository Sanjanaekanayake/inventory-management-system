package com.psl.ims.service;

import java.util.List;


import org.springframework.data.jpa.repository.Query;

import com.psl.ims.entity.Product;

public interface ProductService {

	 List<Product> getAllProducts();
	 
	 Product saveProduct(Product product);
	 
	 Product getProductById(Long id);
	 
	 Product updateProduct(Product product);
	 
	 void deleteProductById(Long id);
	 
	 //ProductService
	 List<Product> findByCategoryId(Long categoryId);
	 
//	 Optional<Product> findByIdAndCategoryId(Long id, Long categoryId);
}
