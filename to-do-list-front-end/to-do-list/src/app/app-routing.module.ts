import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPageComponent } from './task-list-page/task-list-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
{path: '', component:TaskListPageComponent},
{path: 'task-list-page-component', component:TaskListPageComponent},
{path: 'add-page-component', component:AddPageComponent},
{path: 'edit-page-component',component:EditPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
