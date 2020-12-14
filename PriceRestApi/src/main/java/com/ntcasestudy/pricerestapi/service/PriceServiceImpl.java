package com.ntcasestudy.pricerestapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntcasestudy.pricerestapi.model.Price;
import com.ntcasestudy.pricerestapi.repository.PriceRepository;

@Service
public class PriceServiceImpl implements PriceService {

	@Autowired
	PriceRepository priceRepository;
	
	@Override
	public Price createPrice(Price price) {
		// TODO Auto-generated method stub
		Price price2 = null;
		try {
			price2 = priceRepository.save(price);
			return price2;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Optional<Price> getPriceById(int id) {
		// TODO Auto-generated method stub
		return priceRepository.findById(id);
	}

	@Override
	public void deletePrice(int id) {
		// TODO Auto-generated method stub
		priceRepository.deleteById(id);
	}

	@Override
	public Optional<List<Price>> getPrices() {
		// TODO Auto-generated method stub
		return Optional.ofNullable(priceRepository.findAll());
	}

}
