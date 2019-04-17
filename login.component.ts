import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={
  email:'',
  password:''
}

  constructor(private auth:AuthService,private _router:Router) {}
   


  ngOnInit() {
  }
  
  loginUser(){
    this.auth.userLogin(this.loginData)
    .subscribe( res=>{
      console.log(res);
      
    },err=>{
      console.log(err); 
    })
  }

}
