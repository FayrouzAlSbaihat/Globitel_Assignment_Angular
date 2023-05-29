import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Role } from '../data/role';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {

  forms!:FormGroup
  
  constructor(private formBuilder:FormBuilder,
              private accountService:AccountService){}
              
ngOnInit(): void {
  this.buildForm()
}

buildForm(){
this.forms=this.formBuilder.group({
  name:[,Validators.required]
})
}

onSave(){
  debugger
  if(this.forms.valid){
    var newRole=new Role();
    newRole.name=this.forms.value["name"]
    this.accountService.newRole(newRole).subscribe({
      next:data=>{
        alert("Added new role")
      },
      error:err=>{
         alert("error happend")
      }
    })
  }

}
}
