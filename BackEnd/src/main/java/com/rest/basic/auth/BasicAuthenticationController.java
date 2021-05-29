package com.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController
{
	@GetMapping(path="/basicAuth")
	public AuthenticationBean helloWorldBean()
	{
//		throw new RuntimeException("Some error occurred. Contact support at ***-***");
		return new AuthenticationBean("You are authenticated");
	}
}
