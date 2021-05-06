import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  showValidationErrors: boolean;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataservice.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    // console.log('Form Submitted');
    // console.log(form);

    if (form.invalid) return (this.showValidationErrors = true);

    this.dataservice.addTodo(new Todo(form.value.text));

    this.showValidationErrors = false;
    form.reset();
  }
  onTodoClicked() {
    alert('clicked');
  }
}
