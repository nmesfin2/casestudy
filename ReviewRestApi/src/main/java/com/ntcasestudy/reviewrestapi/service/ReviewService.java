package com.ntcasestudy.reviewrestapi.service;

import java.util.Optional;

import com.ntcasestudy.reviewrestapi.model.Review;

public interface ReviewService {
	public Review createReview(Review review);
	public Optional<Review> getReviewById(int id);
	public void deleteReview(int id);
	public Optional<java.util.List<Review>> getReviews();
}
