import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private store: Store<AppState>) {
    this.store.select('todos').subscribe( todos => {
      console.log(this.todos, todos);
      this.todos = todos;
    } );
  }


  ngOnInit(): void {
  }

}
