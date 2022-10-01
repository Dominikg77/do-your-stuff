import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { ToDo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss'],
})
export class TemplateTodoFormComponent implements OnInit {
  public todo$: ToDo;
  @Output() ping: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() {
    this.todo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined,
    };
  }

  ngOnInit(): void {}

  public createToDo(event: any): void {
    this.ping.emit(this.todo$);
    this.todo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined,
    };
  }
}
