import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo: Todo[] = [];
  constructor() {
    this.todo = [
      {
        id: 1,
        title: 'First Todo',
        description: 'Creating my first todo app with angular',
        active: true,
      },
      {
        id: 2,
        title: 'Second Todo',
        description: 'Filling in the data for testing.',
        active: true,
      },
      {
        id: 3,
        title: 'Third Todo',
        description: 'Atleast save 5000 per month',
        active: true,
      },
    ];
  }

  ngOnInit(): void {
    console.log('TodoData', this.todo);
  }
}
