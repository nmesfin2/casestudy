package com.ntcasestudy.reviewrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ntcasestudy.reviewrestapi.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
