package com.psl.ims.service;

import java.util.List;


import com.psl.ims.entity.ProductCategory;

public interface ProductCategoryService {
	
	List<ProductCategory> getAllProductCategories();
	 
	 ProductCategory saveProductCategory(ProductCategory productcategory);	 
	 
	 ProductCategory getProductCategoryById(Long id);
	 
	 ProductCategory updateProductCategory(ProductCategory productcategory);
	 
	 void deleteProductCategoryById(Long id);

}
