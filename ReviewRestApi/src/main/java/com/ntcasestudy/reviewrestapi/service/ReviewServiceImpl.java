package com.ntcasestudy.reviewrestapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntcasestudy.reviewrestapi.model.Review;
import com.ntcasestudy.reviewrestapi.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewRepository reviewRepository;
	
	@Override
	public Review createReview(Review review) {
		// TODO Auto-generated method stub
		Review review2 = null;
		try {
			review2 = reviewRepository.save(review);
			return review2;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Optional<Review> getReviewById(int id) {
		// TODO Auto-generated method stub
		return reviewRepository.findById(id);
	}

	@Override
	public void deleteReview(int id) {
		// TODO Auto-generated method stub
		reviewRepository.deleteById(id);
	}

	@Override
	public Optional<List<Review>> getReviews() {
		// TODO Auto-generated method stub
		return Optional.ofNullable(reviewRepository.findAll());
	}
}
