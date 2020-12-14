package com.ntcasestudy.stockrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntcasestudy.stockrestapi.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

}
