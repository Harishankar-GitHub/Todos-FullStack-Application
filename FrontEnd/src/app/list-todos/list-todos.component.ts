import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo
{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date)
    {

    }
    
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string;
  todos : Todo[];
  // todos =
  // [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(1, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(1, 'Visit India', false, new Date())
  //   // {id : 1, description : 'Learn to Dance'},
  //   // {id : 2, description : 'Become an Expert at Angular'},
  //   // {id : 3, description : 'Visit India'}
  // ]


  // todo =
  // {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }
  constructor
  (
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos()
  {
    this.todoService.retrieveAllTodos('Harissh').subscribe
    (
      response => 
      {
        //console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id)
  {
    this.todoService.deleteTodo('Harissh', id).subscribe
    (
      response =>
      {
        this.message = `Delete of Todo ${id} successful !`;
        this.refreshTodos();
      }
      
    )
    // console.log(`Delete ${id}`);
  }

  updateTodo(id)
  {
    this.router.navigate(['todo', id]);
  }

  addTodo()
  {
    this.router.navigate(['todo',-1]);
  }

}
