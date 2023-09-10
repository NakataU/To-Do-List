import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent {

  constructor(private router:Router){}

  addTask(){
    this.router.navigateByUrl("add-page-component")
  }
}
