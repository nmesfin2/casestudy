package com.ntcasestudy.pricerestapi.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.ntcasestudy.pricerestapi.exception.InvalidPriceException;
import com.ntcasestudy.pricerestapi.exception.ResourceNotFoundException;
import com.ntcasestudy.pricerestapi.model.Price;
import com.ntcasestudy.pricerestapi.model.Product;
import com.ntcasestudy.pricerestapi.service.PriceService;

@RestController
@RequestMapping("/api/v1/price")
public class PriceController {
	@Value("${product.connection.domain}")
	private String product_domain;
	
	@Value("${product.connection.port}")
	private String product_port;
	
	@Value("${product.get.uri}")
	private String product_uri;
	
	@Autowired
	PriceService priceService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@GetMapping
	public List<Price> getPrices() {
		return priceService.getPrices().get();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Price> getPriceById(@PathVariable("id") int priceId) throws ResourceNotFoundException {
		Price price = priceService.getPriceById(priceId).orElseThrow(()-> new ResourceNotFoundException("Price not found"));
		
		return ResponseEntity.ok().body(price);
	}
	
	@PostMapping
	public ResponseEntity<?> createPrice(@Valid @RequestBody Price price,UriComponentsBuilder uriComponentsBuilder,HttpServletRequest request) throws ResourceNotFoundException, InvalidPriceException {
		
		HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity <String> entity = new HttpEntity<String>(headers);
  
		if(price.getPriceValue() < 0 ) {
	    	throw new InvalidPriceException("invalid price");
	    }
	    
		try {   
			Product product = restTemplate.exchange("http://" + product_domain + ":" + product_port + product_uri + price.getProductId(), HttpMethod.GET,entity, Product.class).getBody();
			System.out.println(product);
			Price price2 = priceService.createPrice(price);
			
			UriComponents uriComponents = uriComponentsBuilder
					.path(request.getRequestURI()+"/{id}")
					.buildAndExpand(price2.getPriceId());
			return ResponseEntity.created(uriComponents.toUri()).body(price2);
		}catch(Exception ex){
			throw new ResourceNotFoundException("Error verifying the given ProductId");
		}
	}
	
	@DeleteMapping("/{id}")
	public Map<String, Boolean> deletePriceById(@PathVariable int id) throws ResourceNotFoundException { 
		Price price = priceService.getPriceById(id).orElseThrow(()-> new ResourceNotFoundException("Price not found"));
		
		priceService.deletePrice(id);
		HashMap<String, Boolean> hashMap = new HashMap<>();
		hashMap.put("deleted", Boolean.TRUE);
		
		return hashMap;
	}
	
	
	@PutMapping("/{id}")
	
	public ResponseEntity<Price> updatePrice(@PathVariable("id") Integer id,
			@Valid @RequestBody Price price ) throws ResourceNotFoundException {
		Price price2 = priceService.getPriceById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Price not found to update"));
		price.setPriceId(id);
		Price price3 =priceService.createPrice(price);
		
		return ResponseEntity.ok(price3);
	}
}
