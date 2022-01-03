package com.psl.ims.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Categories")
public class ProductCategory {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="category_name", nullable=false)
	private String category_name;
		
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="status")
	private boolean status;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval=true, mappedBy="productCategory")
	@JsonIgnore
	List<Product> products = new ArrayList<>();
	
	public ProductCategory() {
		// TODO Auto-generated constructor stub
	}

	public ProductCategory(String category_name)
	{		
		this.category_name = category_name;
	}
	
	
	public ProductCategory(int quantity) 
	{		
		this.quantity = quantity;
	}

	public ProductCategory(String category_name, int quantity, boolean status) {
		super();
		this.category_name = category_name;
		this.quantity = quantity;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}


	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
	

}
