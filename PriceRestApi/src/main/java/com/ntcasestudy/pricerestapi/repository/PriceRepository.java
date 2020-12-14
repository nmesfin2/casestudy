package com.ntcasestudy.pricerestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntcasestudy.pricerestapi.model.Price;

@Repository
public interface PriceRepository extends JpaRepository<Price, Integer> {

}
