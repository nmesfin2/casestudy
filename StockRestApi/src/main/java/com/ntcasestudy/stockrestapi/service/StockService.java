package com.ntcasestudy.stockrestapi.service;

import java.util.Optional;

import com.ntcasestudy.stockrestapi.model.Stock;

public interface StockService {
	public Stock createStock(Stock stock);
	public Optional<Stock> getStockById(int id);
	public void deleteStock(int id);
	public Optional<java.util.List<Stock>> getStocks();
}
