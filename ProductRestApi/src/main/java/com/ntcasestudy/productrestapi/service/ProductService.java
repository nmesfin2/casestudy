package com.ntcasestudy.productrestapi.service;

import java.util.Optional;

import com.ntcasestudy.productrestapi.model.Product;

public interface ProductService {
	public Product createProduct(Product product);
	public Optional<Product> getProductById(int id);
	public void deleteProduct(int id);
	public Optional<java.util.List<Product>> getProducts();
	public Optional<java.util.List<Product>> getProductsByCategory(String catName);
}
