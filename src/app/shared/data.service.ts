import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    new Todo('This is test'),
    new Todo(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quae,
    est odio dolorum laboriosam nisi necessitatibus atque? Impedit unde
    nemo deserunt perspiciatis recusandae itaque ab tempora minima iste
    laborum! Doloremque.`),
  ];
  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
