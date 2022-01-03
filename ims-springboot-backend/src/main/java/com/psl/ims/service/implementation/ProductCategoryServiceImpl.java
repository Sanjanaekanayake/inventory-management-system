package com.psl.ims.service.implementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.psl.ims.entity.ProductCategory;
import com.psl.ims.repository.ProductCategoryRepository;
import com.psl.ims.service.ProductCategoryService;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {
	
	ProductCategoryRepository productCategoryRepo;

	public ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepo) {
		super();
		this.productCategoryRepo = productCategoryRepo;
	}
	
	@Override
	public List<ProductCategory> getAllProductCategories() {
		// TODO Auto-generated method stub
		return productCategoryRepo.findAll();
	}
	
	@Override
	public ProductCategory saveProductCategory(ProductCategory productcategory) {
		// TODO Auto-generated method stub
		return productCategoryRepo.save(productcategory);
	}
	
	@Override
	public ProductCategory getProductCategoryById(Long id) {
		// TODO Auto-generated method stub
		return productCategoryRepo.findById(id).get();
	}
	
	@Override
	public ProductCategory updateProductCategory(ProductCategory productcategory) {
		// TODO Auto-generated method stub
		return productCategoryRepo.save(productcategory);
	}
	
	@Override
	public void deleteProductCategoryById(Long id) {
		// TODO Auto-generated method stub
		productCategoryRepo.deleteById(id);
	}
	
	

}
