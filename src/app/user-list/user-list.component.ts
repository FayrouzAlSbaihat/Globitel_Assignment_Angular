import { Component, OnInit } from '@angular/core';
import { Users } from '../data/users';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';


export interface PeriodicElement {

  name: string;
  email: string;

}


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email' ,'role' , 'delete' ] ;

  dataSource =[];

  constructor(private accountService:AccountService,
            private router:Router){}

 ngOnInit(): void {
    this.getUserList()
  }
  
  getUserList(){
    this.accountService.userList().subscribe({
      next:data=>{
        this.dataSource = data
      },
      error:err=>{
        alert("error happned")
      }
    })

  }

  DeleteUser(Id:number){
    debugger
    this.accountService.DeleteUser(Id).subscribe({
      next:data=>{
        this.getUserList()
        alert("Deleted")
      },
      error:err=>{
        alert("error happend!")
      }
    })

  }

  onUserRoles(userId:number){
    debugger
    this.router.navigate(['/Home/UserRoles'],{queryParams:{Id:userId}})
  }



}
