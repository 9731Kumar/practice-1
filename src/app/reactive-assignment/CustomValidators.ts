import { FormControl } from "@angular/forms";

export class CustomValidators{
    static checkName(control:FormControl){
        if(control.value === 'Test'){
          return {checkName:true}
        }
        return null;
      }
}