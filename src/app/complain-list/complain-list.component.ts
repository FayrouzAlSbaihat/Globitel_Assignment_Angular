import { Component, OnInit } from '@angular/core';
import { ComplainService } from '../services/complain.service';
import { AccountService } from '../services/account.service';
import { Users } from '../data/users';
import { Complain } from '../data/complain';
interface user {
  id: string;
  name: string;
}
@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {
  users: user[] = [];

  // liUsers!:Users[]
  displayedColumns: string[] = ['name', 'phone', 'descriptionComplains', 'sendto'];

  dataSource = [];
  liUsers = [];

  constructor(private complainService: ComplainService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.LoadAllComplains();
    this.getUserList();
  }

  LoadAllComplains() {
    this.complainService.LoadAllComplains().subscribe({
      next: data => {
        console.log(data)
        this.dataSource = data
      },
      error: err => {
        alert("Error happend!")

      }
    })
    this.getUserList()
  }

  getUserList() {

    this.accountService.userList().subscribe({
      next: data => {
        this.users = data;
      },
      error: err => {
        alert("error happned")
      }
    })

  }

  AssignTo(User_Id: any, Complain_id: number,name:string,phone:string,descriptionComplains:string) {
    console.log(User_Id)
    console.log(Complain_id)
    var obj=new Complain();
    obj.id=Complain_id;
    obj.User_Id=User_Id;
    obj.name=name;
    obj.phone=phone;
    obj.DescriptionComplains=descriptionComplains;
    this.complainService.SendComplain(obj).subscribe({
      next:data=>{
        alert("sending successfuly")
      },

      error:err=>{
        alert("error happend!")
      }
    })

  }

}
