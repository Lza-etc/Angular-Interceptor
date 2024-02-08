import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  GetAll(apiUrl: string): Observable<Task[]> {
    return this.http.get<Task[]>(apiUrl);
  }
}
