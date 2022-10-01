import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { ToDo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.scss'],
})
export class TemplateTodoComponent implements OnInit {
  @Input() toDo$: ToDo;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public changeCheck(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: EventPing = {
      label: 'check',
      object: this.toDo$,
    };

    this.ping.emit(eventObject);
  }
  public changeLabel(event?: any): void {
    const eventObject: EventPing = {
      label: 'label',
      object: this.toDo$,
    };

    this.ping.emit(eventObject);
  }
  public deleteToDo(event?: any): void {
    const eventObject: EventPing = {
      label: 'delete',
      object: this.toDo$,
    };

    this.ping.emit(eventObject);
  }
}
