import { Component, OnInit } from '@angular/core';
import { UserRoles } from '../data/userRole';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  userRoles!:UserRoles[]
  id!:number

  constructor(private activatedRoute:ActivatedRoute,
    private accountService:AccountService){}

    ngOnInit(): void {
      debugger
      if(this.activatedRoute.snapshot.queryParams["Id"] !=undefined)
      {
        this.id =this.activatedRoute.snapshot.queryParams["Id"]
        this.LoadRoles()
      }
    }

    LoadRoles(){
      debugger
      this.accountService.getUserRoles(this.id).subscribe({
        next:data=>{
          this.userRoles=data
        },
        error:err=>{
          alert("error happned!")
        }
      })
  
    }


   onUpdate(userRoles:UserRoles[]){
    this.accountService.UpdateRoles(userRoles).subscribe({
      next:data=>{
         alert("success")
      },
      error:err=>{
        alert("error happned")
       }
    })
   }
  }    

