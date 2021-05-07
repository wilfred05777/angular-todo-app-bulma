import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  showValidationErrors: boolean;

  constructor(private dataservice: DataService, private dialog: MatDialog) {}

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

  toggleCompleted(todo: Todo) {
    // alert('clicked');
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    // 2:26:30 - install angular material
    // ng add @angular/material
    //  2:35:26

    //we need
    // - index of todo
    // user need to enter new updated information

    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      // height: '400px',
      width: '700px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataservice.updateTodo(index, result);
      }
    });
    // this.dataservice.updateTodo();
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataservice.deleteTodo(index);
  }
}
