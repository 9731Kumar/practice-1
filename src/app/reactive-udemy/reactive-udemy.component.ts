import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-udemy',
  templateUrl: './reactive-udemy.component.html',
  styleUrls: ['./reactive-udemy.component.css']
})
export class ReactiveUdemyComponent implements OnInit {

  genders:string[]=['male','female','others']

  registrationForm!:FormGroup;

  forbiddenNames:string[]=['Kalyan','Kumara'];

  constructor() { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      userName:new FormControl(null, [Validators.required, this.checkUsername.bind(this)]),
      email:new FormControl(null, [Validators.required, Validators.email]),
      gender:new FormControl('male')
    })

    //this.registrationForm.patchValue({})
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

  checkUsername(control:FormControl){
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return {forbidden:true}
    }
    return null;
  }

  //async validators
  forbiddenEmail(control:FormControl): Promise<any>|Observable<any>{
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailInvalid':true});
        }else {
          resolve(null)
        }
      },1500)
    });
    return promise;    
  }


}
