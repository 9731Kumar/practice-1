import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-assignment',
  templateUrl: './template-assignment.component.html',
  styleUrls: ['./template-assignment.component.css']
})
export class TemplateAssignmentComponent implements OnInit {

  defaultSelect:string='advance';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value); 
  }

}
