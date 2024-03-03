import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SupportService } from '../support.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  // importing support service class 
  constructor(private general: SupportService) { }

  //  firstname:string='';
  //  location:string = '';  
  //  email:string = '';  
  //  phone:number;
 
    // const tempArray={
    //   tempName: this.register.value.name,
    //   tempEmail: this.register.value.email,
    //   tempLocation: this.register.value.location,
    //   tempPhone: this.register.value.phone
    // }
    // creating a form group register
    // adding form controls inside register with validators
    register = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.pattern("^[0-9]+$"), Validators.required]),
  
    })

    // saveChanges funtion triggered by ngSubmit
    saveChanges() {
      console.log(this.register.value);
      // if form is valid then 
      if(this.register.valid) {
        const firstname:any=this.register.value.name;
        const email:any=this.register.value.email;
        const phone:any=this.register.value.phone;
        const location:any=this.register.value.location;
        
        // form data is exported to updateDetails inside service class
        this.general.updateDetails(firstname,email,phone,location)
        this.register.reset();
      }
  }

  
}





