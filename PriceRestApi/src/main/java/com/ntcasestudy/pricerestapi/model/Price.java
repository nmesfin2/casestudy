package com.ntcasestudy.pricerestapi.model;

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
@Table(name = "price_tbl")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Price {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "price_id")
	private int priceId;
	
	@Column(name = "pro_id")

	private int productId;

	private double priceValue;
}
