package com.psl.ims.service.implementation;

import java.util.List;
import java.util.Optional;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.psl.ims.entity.Product;
import com.psl.ims.repository.ProductRepository;
import com.psl.ims.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepository productRepo;
	
	@PersistenceContext
    private EntityManager entityManager;
	
	public ProductServiceImpl(ProductRepository productRepo) {
		super();
		this.productRepo = productRepo;
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	@Override
	public Product saveProduct(Product product) {
		
		return productRepo.save(product);
	}

	@Override
	public Product getProductById(Long id) {
		// TODO Auto-generated method stub
		return productRepo.findById(id).get();
	}

	@Override
	public Product updateProduct(Product product) {
		
		return productRepo.save(product);
	}

	@Override
	public void deleteProductById(Long id) {
		// TODO Auto-generated method stub
		productRepo.deleteById(id);
	}
	

	  @Override
	  public List<Product> findByCategoryId(Long categoryId) {
	  
		  return productRepo.findByCategoryId(categoryId);
	   }
	 

	/*
	 * @SuppressWarnings("unchecked")
	 * 
	 * @Override
	 *  public List<Product> findByCategoryId(Long categoryId) {
	 * 
	 * return entityManager.
	 * createQuery("SELECT p FROM products p WHERE p.pc_fid = :categoryId").
	 * getResultList(); }
	 */
	
//	@SuppressWarnings("unchecked")
//	@Override
//    public List<Product> findByCategoryId(Long categoryId) {
//        // Simple SQL query for example.
//        String queryString = "SELECT p FROM products p " 
//             + "WHERE p.pc_fid = " + categoryId;
//        Query query = (Query) entityManager.createQuery(queryString);
//
//        List resultList = ((javax.persistence.Query) query).getResultList();
//        return resultList;
//    }
	
	
	
//	public List<Product> findByCategoryId(Long categoryId) {
//		// TODO Auto-generated method stub
//		 String hql = "SELECT p FROM products p WHERE p.pc_fid = :categoryId";
//	     TypedQuery<Product> query = entityManager.createQuery(hql, Product.class);
//	     query.setParameter("id", categoryId);
//	     return query.getResultList();
//	}
}
