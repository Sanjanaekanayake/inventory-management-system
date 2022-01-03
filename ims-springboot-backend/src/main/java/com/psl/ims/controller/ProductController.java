package com.psl.ims.controller;



import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.psl.ims.entity.Product;
import com.psl.ims.entity.ProductCategory;
import com.psl.ims.repository.ProductCategoryRepository;
import com.psl.ims.repository.ProductRepository;
import com.psl.ims.service.ProductCategoryService;
import com.psl.ims.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	
	
	@Autowired
	private ProductCategoryService productCategoryService;
	
	
	public ProductController(ProductService productService) {
		super();
		this.productService = productService;
	}
	
	@GetMapping("/categories/products/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Product> getProductsByCategory(@PathVariable Long id)
	{		
	    return productService.findByCategoryId(id);
    }
	
	@GetMapping("/products/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Product> getProductById(@PathVariable Long id) {
		
		Product product = productService.getProductById(id);
		return ResponseEntity.ok(product);
		
	}
	
		
	@PostMapping("categories/products/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Product saveProduct(@PathVariable Long id, @RequestBody Product product)
	{				
		product.setProductCategory(productCategoryService.getProductCategoryById(id));
		return productService.saveProduct(product);	
	}
	
	@PutMapping("categories/products/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
					
		Product existingProduct = productService.getProductById(id);
		existingProduct.setId(id);
		existingProduct.setName(product.getName());
		existingProduct.setPrice(product.getPrice());
		existingProduct.setQuantity(product.getQuantity());		
				
		return productService.updateProduct(existingProduct);    		
			
	}
	
	@DeleteMapping("categories/products/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteProduct(@PathVariable Long id) {
				
		productService.deleteProductById(id);
		
	}
	
	
	
	
	
}
