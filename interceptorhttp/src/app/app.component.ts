import { Component, OnInit } from '@angular/core';
import { RestService } from './services/rest.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todoList$!: Task[];
  trueApiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  fakeApiUrl: string = 'https://jsonplaceholder.typicode.com/todo';

  constructor(private restService: RestService) {}

  public getApiResponse(apiUrl: string): void {
    this.restService.GetAll(apiUrl).subscribe((result) => {
      this.todoList$ = result;
      console.log(this.todoList$);
    });
  }
}
