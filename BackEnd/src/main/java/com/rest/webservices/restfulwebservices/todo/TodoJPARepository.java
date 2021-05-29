package com.rest.webservices.restfulwebservices.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Long>
{
	// The data type is Long and not long because it won't accept primitives. So Long (Wrapper class) is used.
	
	
	List<Todo> findByUsername(String username);		// This is a user defined method.
													// This is created because data has to be fetched
													// using a specific column name.
													// Parameter : Column name
													// Return type : List<Todo>
}
