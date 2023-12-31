import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListPageComponent } from './task-list-page/task-list-page.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { AddPageComponent } from './add-page/add-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HoldButtonDirective } from './hold-button.directive';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListPageComponent,
    TaskListItemComponent,
    AddPageComponent,
    HoldButtonDirective,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
