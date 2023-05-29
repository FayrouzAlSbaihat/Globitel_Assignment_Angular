import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { SignUp } from '../data/signup';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide = true;
  forms!:FormGroup

  constructor(private formBuilder:FormBuilder,
              private accountService:AccountService){}

  ngOnInit():void {
    this.buildForm()
  }

  buildForm(){
    this.forms=this.formBuilder.group({
      name:[,Validators.required],
      email:[,Validators.compose([Validators.required,Validators.email])],
      password:[,Validators.required],
      confirmPassword:[,Validators.required]

    })
  }

  OnSignUp(){
    debugger
    if(this.forms.valid){
      var user =new SignUp();
      user.name=this.forms.value["name"];
      user.email=this.forms.value["email"];
      user.password=this.forms.value["password"];
      user.confirmPassword=this.forms.value["confirmPassword"];

      this.accountService.CreateAccount(user).subscribe({
        next:data=>{
          alert("SignUp Successfully")
        },
        error:err=>{
          alert("error Happend!")
        }

      })


    }

  }


}
