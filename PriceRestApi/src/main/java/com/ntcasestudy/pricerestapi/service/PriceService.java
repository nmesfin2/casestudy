package com.ntcasestudy.pricerestapi.service;

import java.util.Optional;

import com.ntcasestudy.pricerestapi.model.Price;

public interface PriceService {
	public Price createPrice(Price price);
	public Optional<Price> getPriceById(int id);
	public void deletePrice(int id);
	public Optional<java.util.List<Price>> getPrices();
}
