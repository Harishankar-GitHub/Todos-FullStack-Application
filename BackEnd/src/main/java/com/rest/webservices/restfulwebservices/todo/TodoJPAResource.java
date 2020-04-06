package com.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJPAResource {
	
//	@Autowired
//	private TodoHardCodedService todoService;		// Commented this because we have created JPA Repository for Todo
	
	@Autowired
	private TodoJPARepository todoJPARepository;
	
	@GetMapping("/jpa/users/{username}/todos")		//GET Method
	public List<Todo> getAllTodos(@PathVariable String username)
	{
		return todoJPARepository.findByUsername(username);	// This is not a default JPA method. 
															//	This is a user defined method created in TodoJPARepository.java class
//		return todoService.findAll();
	}

	@GetMapping("/jpa/users/{username}/todos/{id}")		//GET Method
	public Todo getTodos(@PathVariable String username, @PathVariable long id)
	{
		return todoJPARepository.findById(id).get();	// findById is a predefined method in JPA Repository.
														// todoJPARepository.findById(id) is enough. 
														//	But .get() method is used because findById() method would 
														//	return an Optional. To get that, .get() method is used.
														// 2 types of usage : local variable = todoJPARepository.findById(id);
														// OR return todoJPARepository.findById(id).get();
//		return todoService.findById(id);
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")		//DELETE Method
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id)
	{
//		Todo todo = todoService.deleteById(id);
		todoJPARepository.deleteById(id);				// deleteById is a predefined method in JPA Repository.
		return ResponseEntity.noContent().build();		//Returns no content when successful
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")		//PUT Method used for UPDATE operation
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
	{
		Todo todoUpdated = todoJPARepository.save(todo);	// save() is a predefined method in JPA Repository.
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);		//Returns OK along with updated data
	}
	
	@PostMapping("/jpa/users/{username}/todos")		//POST Method used to ADD new data
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo)
	{
		todo.setUsername(username);
		Todo createdTodo = todoJPARepository.save(todo);	// save() is a predefined method in JPA Repository.
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();		//Returns created URI
	}
}
