package com.ntcasestudy.stockrestapi.model;

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
@Table(name = "stock_tbl")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stock {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "stock_id")
	private int stockId;
	
	@Column(name = "pro_id")
	private int productId;
	
	private int quantity;
	
	private String location; 
}
