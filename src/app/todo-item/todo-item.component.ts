import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  // todo: Todo[];
  @Input() todo: Todo;
  // 2:16:57 in video  - fixed
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    // this.todos = this.dataservice.getAllTodos();
  }
  onTodoClicked() {
    // console.log('Todo is clicked');
    this.todoClicked.emit();
  }
  onEditClicked() {
    this.editClicked.emit();
  }
}
