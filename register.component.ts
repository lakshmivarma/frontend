import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerData={
  name:'',
  email:'',
  password:'',
}


  constructor(private auth:AuthService , private router:Router) { }
  registerUser(){
    console.log(this.registerData);
    this.auth.userRegistration(this.registerData).subscribe(res=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })

  }


  ngOnInit() {
  }

}
