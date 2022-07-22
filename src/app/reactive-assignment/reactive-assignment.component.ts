import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {

  projectForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.projectForm=new FormGroup({
      projectName:new FormControl(null, [Validators.required, CustomValidators.checkName]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      status:new FormControl(null,[Validators.required])
    })
  }

  get fControl(){
    return this.projectForm.controls;
  }

  onSubmit(){
    console.log(this.projectForm);
    
  }

  checkName(control:FormControl){
    if(control.value === 'Test'){
      return {checkName:true}
    }
    return null;
  }

}
