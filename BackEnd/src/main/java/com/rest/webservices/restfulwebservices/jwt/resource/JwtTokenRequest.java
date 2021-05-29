package com.rest.webservices.restfulwebservices.jwt.resource;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter
public class  JwtTokenRequest implements Serializable
{
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
  private String password;

    public JwtTokenRequest()
    {
        super();
    }

    public JwtTokenRequest(String username, String password)
    {
        this.setUsername(username);
        this.setPassword(password);
    }
}
