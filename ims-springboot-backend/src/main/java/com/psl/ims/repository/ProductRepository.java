package com.psl.ims.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.psl.ims.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	
	/*
	 * @Query("SELECT new com.psl.ims.entity.Product (p) FROM products p WHERE p.pc_fid=:categoryId"
	 * ) List<Product> findByCategoryId(@Param("categoryId") Long categoryId);
	 */
	
//	@Query("SELECT p FROM products p WHERE p.pc_fid =:param", nativeQuery=true)
//	List<Product> findByCategoryId(@Param("param") Long param);
	
	
	@Query(value = "SELECT p.id,p.product_name,p.product_price,p.quantity,p.category_id FROM products p WHERE p.category_id =:param", nativeQuery = true)
	List<Product> findByCategoryId(@Param("param") Long param);

}
