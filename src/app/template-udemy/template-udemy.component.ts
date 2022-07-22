import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-udemy',
  templateUrl: './template-udemy.component.html',
  styleUrls: ['./template-udemy.component.css']
})
export class TemplateUdemyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('form') submitForm!:NgForm;
  defaultSelect="pet"

  answer:string="Kalyan";

  genders:string[]=['male', 'female', 'others'];

  user={
    name:'',
    email:'',
    secret:'',
    ans:'',
    gender:''
  }

  isSubmitted:boolean=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.submitForm.setValue({
    //   username:suggestedName,
    //   email:'',
    //   questionArea:'',
    //   secret:'pet',
    //   gender:'male'
    // })

    this.submitForm.form.patchValue({
      username:suggestedName
    })
  }

  onSubmit(form:NgForm){
    console.log(form);
    this.isSubmitted=true;
    this.user.name=form.value.username
    this.user.email=form.value.email
    this.user.secret=form.value.secret
    this.user.ans=form.value.questionArea
    this.user.gender=form.value.gender
  }

  // onSubmit(){
  //   console.log(this.submitForm);
    
  // }

}
