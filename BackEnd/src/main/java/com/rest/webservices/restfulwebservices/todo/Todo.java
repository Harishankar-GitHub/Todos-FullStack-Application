package com.rest.webservices.restfulwebservices.todo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter @Setter
public class Todo
{
	@Id							// @Id should have a wrapper class & not a primitive
	@GeneratedValue
	private Long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;

	public Todo(long id, String username, String description, Date targetDate, boolean isDone)
	{
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
}
