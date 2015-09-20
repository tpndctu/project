package com.acuity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acuity.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByUsername(String username);
}
