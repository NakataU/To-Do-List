import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {

  constructor(private router:Router, private taskService:TaskService){}

  task = {
    id:12,
    title: " ",
    done: false,
    time: null,
  }


  addTask(title:string){
  this.task = {
    id:12,
    title:title,
    done:false,
    time: null 
  }

  this.taskService.addTask(this.task)
  this.router.navigate(["task-list-page-component"]).then(() => {
    window.location.reload();
  });
  }
}
