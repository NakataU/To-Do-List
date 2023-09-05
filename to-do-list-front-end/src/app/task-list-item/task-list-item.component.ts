import { Component } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  tasks: Task[] = [];

  constructor(private taskService:TaskService,private router:Router) {}

  ngOnInit(): void{
    this.taskService.findAll().subscribe(data =>
      this.tasks = data
    )
  }

  delete(id:number){
   console.log("delete tuk")
   this.taskService.deleteTask(id);
   window.location.reload();
  }

}
