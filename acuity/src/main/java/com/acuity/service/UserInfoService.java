package com.acuity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acuity.model.User;
import com.acuity.repository.UserRepository;

@Service
public class UserInfoService {
	@Autowired
	private UserRepository user;
	
	public User getUserByUserName(String username){
		return user.findByUsername(username);
	}
}