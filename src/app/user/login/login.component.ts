import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserveService } from '../service/userserve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform=new FormGroup({
  email:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required])
})
  constructor( private loginservice:UserserveService,private router:Router) { }

  ngOnInit(): void {}
  userlogin(){
    if(this.loginform.valid){
      this.loginservice.login(this.loginform.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem("token",res.token)
        this.loginform.reset();
         this.router.navigate(["listings"])
      },error=>{
        console.log(error)
      })
    }
  }

}
