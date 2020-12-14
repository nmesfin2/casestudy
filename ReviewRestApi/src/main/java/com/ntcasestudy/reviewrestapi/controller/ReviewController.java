package com.ntcasestudy.reviewrestapi.controller;

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

import com.ntcasestudy.reviewrestapi.exception.ResourceNotFoundException;
import com.ntcasestudy.reviewrestapi.model.Review;
import com.ntcasestudy.reviewrestapi.model.Product;
import com.ntcasestudy.reviewrestapi.service.ReviewService;

@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {
	@Value("${product.connection.domain}")
	private String product_domain;
	
	@Value("${product.connection.port}")
	private String product_port;
	
	@Value("${product.get.uri}")
	private String product_uri;
	
	@Autowired
	ReviewService reviewService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@GetMapping
	public List<Review> getReviews() {
		return reviewService.getReviews().get();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Review> getReviewById(@PathVariable("id") int reviewId) throws ResourceNotFoundException {
		Review review = reviewService.getReviewById(reviewId).orElseThrow(()-> new ResourceNotFoundException("Review not found"));
		
		return ResponseEntity.ok().body(review);
	}
	
	@PostMapping
	public ResponseEntity<?> createReview(@Valid @RequestBody Review review,UriComponentsBuilder uriComponentsBuilder,HttpServletRequest request) throws ResourceNotFoundException {
		
		HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity <String> entity = new HttpEntity<String>(headers);

	    
		try {   
			Product product = restTemplate.exchange("http://" + product_domain + ":" + product_port + product_uri + review.getProductId(), HttpMethod.GET,entity, Product.class).getBody();
			System.out.println(product);
			Review review2 = reviewService.createReview(review);
			
			UriComponents uriComponents = uriComponentsBuilder
					.path(request.getRequestURI()+"/{id}")
					.buildAndExpand(review2.getReviewId());
			return ResponseEntity.created(uriComponents.toUri()).body(review2);
		}catch(Exception ex){
			throw new ResourceNotFoundException("Error verifying the given ProductId");
		}
	}
	
	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteReviewById(@PathVariable int id) throws ResourceNotFoundException { 
		Review review = reviewService.getReviewById(id).orElseThrow(()-> new ResourceNotFoundException("Review not found"));
		
		reviewService.deleteReview(id);
		HashMap<String, Boolean> hashMap = new HashMap<>();
		hashMap.put("deleted", Boolean.TRUE);
		
		return hashMap;
	}
	
	
	@PutMapping("/{id}")
	
	public ResponseEntity<Review> updateReview(@PathVariable("id") Integer id,
			@Valid @RequestBody Review review ) throws ResourceNotFoundException {
		Review review2 = reviewService.getReviewById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Review not found to update"));
		review.setReviewId(id);
		Review review3 =reviewService.createReview(review);
		
		return ResponseEntity.ok(review3);
	}
}
