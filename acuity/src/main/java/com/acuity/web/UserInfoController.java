/**
 * 
 */
package com.acuity.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.acuity.model.User;
import com.acuity.model.utils.PasswordChange;
import com.acuity.service.UserInfoService;

/**
 * @author dhnhan
 *
 */
@RestController
@RequestMapping("/api")
public class UserInfoController {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	UserInfoService userInfoService;
	
	@RequestMapping(value = "/userinfo/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public User getUserInfo(@PathVariable String id) {
		log.info("get user {} ", id);
		return userInfoService.getUserByUserName(id);
	}

	@RequestMapping(value = "/userinfo", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> update(@RequestBody User userInfo) {
		log.info("update user {}", userInfo);
		if (userInfo.getId() != null) {
			User userUpdate = userInfoService.findOne(userInfo.getId());
			userUpdate.setId(userInfo.getId());
			userUpdate.setUsername(userInfo.getUsername());
			userUpdate.setEmail(userInfo.getEmail());
			userUpdate.setFirstName(userInfo.getFirstName());
			userUpdate.setLastName(userInfo.getLastName());
			userUpdate.setBirthDate(userInfo.getBirthDate());
			userInfoService.updateUser(userUpdate);
		}
		return ResponseEntity.ok().build();
	}

	@RequestMapping(value = "/userinfo/changepassword", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> changePassword(@RequestBody PasswordChange password) {
		if (!checkPassword(password.getPasswordNew())) {
			return new ResponseEntity<>("Incorrect password", HttpStatus.BAD_REQUEST);
		}
		userInfoService.changePassword(password.getUsername(), password.getPasswordNew());
		log.debug("changed password : {}",password.getPasswordNew());
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	private boolean checkPassword(String password){
		if (password.length() >= 6 && password.length() <=20) {
			return true;
		}
		return false;
	}
}
