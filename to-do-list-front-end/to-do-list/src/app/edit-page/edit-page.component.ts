import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskListPageComponent } from '../task-list-page/task-list-page.component';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent {

  constructor(private router:Router,private taskService:TaskService){}

  task = {
    id:12,
    title: " ",
    done: false,
    time: null,
  }

  editTask(title:string){

    this.task = {
      id:12,
      title:title,
      done:false,
      time: null 
    }

    this.taskService.editTask(TaskListItemComponent.ID,this.task);

    this.router.navigate(["task-list-page-component"]).then(() => {
     window.location.reload();
    });
  }
}
