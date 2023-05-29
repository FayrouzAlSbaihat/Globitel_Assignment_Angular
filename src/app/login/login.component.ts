import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { SignIn } from '../data/signIn';
import { TranslateService } from '@ngx-translate/core';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  forms!:FormGroup
  @ViewChild('txtuname')txtuname!:ElementRef

  constructor(private formBuilder:FormBuilder,
    private accountService:AccountService,
    private router:Router,
    private translate: TranslateService){}


    ngOnInit(): void {
      this.buildForm()
    }


  buildForm() {
    this.forms=this.formBuilder.group({
      username :[,Validators.required],
      password :[,Validators.required]
    })
  }

  OnChangeLanguage(language:string){
  debugger
    // if(this.language=='ar'){
    //   document.getElementsByTagName("body")[0].dir="rtl";
    //   }
    // else{
    //   document.getElementsByTagName("body")[0].dir="ltr";
    // }
  
    this.translate.use(language);
  }

  onLogin(){
    debugger
    if(this.forms.valid){
      var user =new SignIn();
      user.username=this.forms.value["username"];
      user.password=this.forms.value["password"];

      this.accountService.SignIn(user).subscribe({
        next:data=>{
          debugger
        localStorage.setItem("userToken",data.token)
        localStorage.setItem("User_id",data.user.id)
        this.accountService.getUserRoles(data.user.id).subscribe({
          next:data=>{
            debugger
     
          this.router.navigate(['/Home/DashBoard'],{queryParams:{username:this.txtuname.nativeElement.value}})
          },
          error:err=>{
            alert("error!")
          }
          
        })

        },
        error:err=>{
        alert("username or password incorrect")
    }
  
      })

    }

  }

  onSignUp(){
    this.router.navigate(['/SignUp'])
  }


        
}
