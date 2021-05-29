package com.rest.basic.auth;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//@Configuration			//Commenting because added JWT
//@EnableWebSecurity		//Commenting because added JWT
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter
{
	@Override
	protected void configure(HttpSecurity http) throws Exception
	{
		http
		.csrf().disable()
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
				.anyRequest().authenticated()
				.and()
//			.formLogin().and()
			.httpBasic();
	}	
}
