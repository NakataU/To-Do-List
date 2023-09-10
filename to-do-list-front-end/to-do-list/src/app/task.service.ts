import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
private taskURL:string;

  constructor(private http:HttpClient) { 
    this.taskURL = "http://localhost:8080/api/task";
  }

  public addTask(task:Task):void{
    this.http.post<Task>(this.taskURL + "/add", task)
    .subscribe(
      data => {
        console.log("Task added successfully", data);
      },
      error => {
        console.error("Error adding task", error);
      }
    );
  }

  public editTask(id:number,task:Task):void{
    this.http.put<Task>(this.taskURL + "/" + id + "/edit",task)
    .subscribe(
      data => {
        console.log("Task edited successfully", data);
      },
      error => {
        console.error("Error editing task", error);
      }
    );
  }

  // public deleteTask(id:number):void{
  //   this.http.delete<Task>(this.taskURL + "/" + id + "/delete")
  //   .subscribe(
  //     data => {
  //       console.log("Task deleted successfully", data);
  //     },
  //     error => {
  //       console.error("Error deleting task", error);
  //     }
  //   );
  // }

  public deleteTask(id:number):void{
    console.log("in faculty service");
    this.http.delete<Task>(this.taskURL + "/" + id + "/delete").subscribe(
      (response) => {
        // Handle the response if needed
        console.log("Faculty deleted successfully");
      },
      (error) => {
        // Handle the error if any
        console.log("Error deleting faculty:", error);
      }
    );
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskURL + "/all");
  }
}