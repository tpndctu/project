/**
 * 
 */
package com.acuity.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author dhnhan
 *
 */
@Controller
@RequestMapping(value = "/")
public class IndexController {

	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView appInit() {
		ModelAndView view = new ModelAndView("/index.html");
		return view;
	}
}
