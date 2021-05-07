import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, AfterViewInit {
  // todo: Todo[];
  @Input() todo: Todo;
  // 2:16:57 in video  - fixed
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('editBtn') editBtnElRef: ElementRef<HTMLElement>;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    // this.todos = this.dataservice.getAllTodos();
  }

  ngAfterViewInit(): void {
    console.log('This is the edit btn element');
    console.log(this.editBtnElRef.nativeElement);
    tippy(this.editBtnElRef.nativeElement, {
      content: 'Edit Todo',
    });
  }

  onTodoClicked() {
    // console.log('Todo is clicked');
    this.todoClicked.emit();
  }
  onEditClicked() {
    this.editClicked.emit();
  }
  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
