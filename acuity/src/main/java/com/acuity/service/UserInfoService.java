package com.acuity.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acuity.model.User;
import com.acuity.repository.UserRepository;
import com.acuity.security.PasswordCrypto;

@Service
public class UserInfoService {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordCrypto passwordCrypto;

	public User getUserByUserName(String username) {
		return userRepository.findByUsername(username);
	}

	public void updateUser(User userInfo) {
		userRepository.saveAndFlush(userInfo);
	}

	public User findOne(long id) {
		return userRepository.findOne(id);
	}

	public void changePassword(String username, String password) {
		User user = userRepository.findByUsername(username);
		String passwordCry = passwordCrypto.encrypt(password);
		user.setPassword(passwordCry);
		userRepository.save(user);
		log.info("Changed password {}", passwordCry);
	}
}
