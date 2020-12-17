package com.ntcasestudy.stockrestapi.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import com.ntcasestudy.stockrestapi.exception.InvalidQuantyException;
import com.ntcasestudy.stockrestapi.exception.ResourceNotFoundException;
import com.ntcasestudy.stockrestapi.model.Product;
import com.ntcasestudy.stockrestapi.model.Stock;
import com.ntcasestudy.stockrestapi.service.StockService;
import org.springframework.beans.factory.annotation.Value;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/stock")
public class StockController {

	@Value("${product.connection.domain}")
	private String product_domain;
	
	@Value("${product.connection.port}")
	private String product_port;
	
	@Value("${product.get.uri}")
	private String product_uri;
	
	@Autowired
	StockService stockService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@GetMapping
	public List<Stock> getStocks() {
		return stockService.getStocks().get();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Stock> getStockById(@PathVariable("id") int stockId) throws ResourceNotFoundException {
		Stock stock = stockService.getStockById(stockId).orElseThrow(()-> new ResourceNotFoundException("Stock not found"));
		
		return ResponseEntity.ok().body(stock);
	}
	
	@PostMapping
	public ResponseEntity<?> createStock(@Valid @RequestBody Stock stock,UriComponentsBuilder uriComponentsBuilder,HttpServletRequest request) throws ResourceNotFoundException, InvalidQuantyException {
		
		HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity <String> entity = new HttpEntity<String>(headers);
  
		if(stock.getQuantity() <=0 ) {
	    	throw new InvalidQuantyException("invalid quantity");
	    }
	    
		try {   
			Product product = restTemplate.exchange("http://" + product_domain + ":" + product_port + product_uri + stock.getProductId(), HttpMethod.GET,entity, Product.class).getBody();
			System.out.println(product);
			Stock stock2 = stockService.createStock(stock);
			
			UriComponents uriComponents = uriComponentsBuilder
					.path(request.getRequestURI()+"/{id}")
					.buildAndExpand(stock2.getStockId());
			return ResponseEntity.created(uriComponents.toUri()).body(stock2);
		}catch(Exception ex){
			throw new ResourceNotFoundException("Error verifying the given ProductId");
		}
	}
	
	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteStockById(@PathVariable int id) throws ResourceNotFoundException { 
		Stock stock = stockService.getStockById(id).orElseThrow(()-> new ResourceNotFoundException("Stock not found"));
		
		stockService.deleteStock(id);
		HashMap<String, Boolean> hashMap = new HashMap<>();
		hashMap.put("deleted", Boolean.TRUE);
		
		return hashMap;
	}
	
	
	@PutMapping("/{id}")
	
	public ResponseEntity<Stock> updateStock(@PathVariable("id") Integer id,
			@Valid @RequestBody Stock stock ) throws ResourceNotFoundException {
		Stock stock2 = stockService.getStockById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Stock not found to update"));
		stock.setStockId(id);
		Stock stock3 =stockService.createStock(stock);
		
		return ResponseEntity.ok(stock3);
	}
}
