/**
 * 
 */
package com.acuity.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.acuity.model.User;
import com.acuity.service.UserInfoService;

/**
 * @author dhnhan
 *
 */
@RestController
@RequestMapping("api/userinfo")
public class UserInfoController {
	
	private final Logger log = LoggerFactory.getLogger(getClass());
	
	@Autowired
	UserInfoService user;
	
	@RequestMapping(value="/{username}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public User getUserInfo(@PathVariable String username){
		log.info("get user !");
		return user.getUserByUserName(username);
	}
	
}
