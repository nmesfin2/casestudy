package com.ntcasestudy.stockrestapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntcasestudy.stockrestapi.model.Stock;
import com.ntcasestudy.stockrestapi.repository.StockRepository;

@Service
public class StockServiceImpl implements StockService {

	@Autowired
	StockRepository stockRepository;
	
	@Override
	public Stock createStock(Stock stock) {
		// TODO Auto-generated method stub
		Stock stock2 = null;
		try {
			stock2 = stockRepository.save(stock);
			return stock2;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Optional<Stock>getStockById(int id) {
		// TODO Auto-generated method stub
		return stockRepository.findById(id);
	}

	@Override
	public void deleteStock(int id) {
		// TODO Auto-generated method stub
		stockRepository.deleteById(id);
	}

	@Override
	public Optional<List<Stock>> getStocks() {
		// TODO Auto-generated method stub
		return Optional.ofNullable(stockRepository.findAll());
	}

}
