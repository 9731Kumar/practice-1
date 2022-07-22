import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateUdemyComponent } from './template-udemy/template-udemy.component';
import { TemplateAssignmentComponent } from './template-assignment/template-assignment.component';
import { ReactiveUdemyComponent } from './reactive-udemy/reactive-udemy.component';
import { ReactiveAssignmentComponent } from './reactive-assignment/reactive-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateUdemyComponent,
    TemplateAssignmentComponent,
    ReactiveUdemyComponent,
    ReactiveAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
