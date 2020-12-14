package com.ntcasestudy.stockrestapi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
//it will inform to jpa that this class is used for jpa repository.(ORM mapping purpose)
@Table(name = "product_tbl")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "pro_id")
	private int productId;
	@Column(name="product_name")
	private String productName;
	private String category;
	private String description;
	private Date expiryDate;
	
}
