import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserveService } from '../service/userserve.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerform=new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required]),
})
  constructor(private userservice:UserserveService,private router:Router) { }

  ngOnInit(): void {
  }
  userregister(){
    if(this.registerform.valid){
      this.userservice.register(this.registerform.value).subscribe(res=>{
        this.registerform.reset();
           this.router.navigate(["user/login"]);
      })
    }
  }

}
