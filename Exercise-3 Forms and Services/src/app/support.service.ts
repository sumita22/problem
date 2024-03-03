import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {



// default user value to be displayed in profile section
private user:{name:string, email: string, phone:number,location:string}[]= [
{ name:"Akhita",email:"akhita@gmail.com",phone:9345678210, location:'Chennai'},
]

// updateDetails function that updates user details from form in setting and changes are displayed in profile section
updateDetails(name:string, email: string, phone:number,location:string):void {
  // finding the index of user based on email matching
  const currentUserIndex= this.user.findIndex((details) => details.email === email);
  if (currentUserIndex !== -1)
   {
    this.user[currentUserIndex].name = name;
    this.user[currentUserIndex].email = email;
    this.user[currentUserIndex].phone = phone;
    this.user[currentUserIndex].location = location;
    alert("Details Updated Successfully");
  }
  else{
    alert( "Invalid ,User details not updated");
  }
}


// to export the user object using  getUserDetails function
getUserDetails(){
  return this.user;
}
}
