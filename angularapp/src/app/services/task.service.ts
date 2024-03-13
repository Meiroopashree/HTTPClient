import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public apiUrl = 'https://ide-beeafcabeefc310542622dcbababacbbthree.premiumproject.examly.io/proxy/3001/tasks'; // Assuming a backend endpoint for tasks

  constructor(private http: HttpClient) {}

  getTasks(){
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task){
    return this.http.post<Task>(this.apiUrl, task);
  }

  // updateTask(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task);
  // }

  // deleteTask(taskId: number): Observable<void> {
  //   const url = `${this.apiUrl}/${taskId}`;
  //   return this.http.delete<void>(url);
  // }
}
