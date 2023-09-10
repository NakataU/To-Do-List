import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
tasks:Task[] = [];
static ID: number;
isChecked = false;

constructor(private taskService:TaskService,private router:Router){}

ngOnInit():void{
this.taskService.findAll().subscribe(
data=>{
  this.tasks = data;
  console.log("Successfully get tasks", data);
      },
      error => {
        console.error("Failed to get tasks", error);
      }
    );
  };

  delete(id:number){
    this.taskService.deleteTask(id)
    window.location.reload();
  }

  edit(id:number){
    TaskListItemComponent.ID = id;    
    this.router.navigateByUrl('edit-page-component')
  }

  changeStatus(task:Task){
    console.log(task)
    this.taskService.editTask(task.id,task);
  }

}
