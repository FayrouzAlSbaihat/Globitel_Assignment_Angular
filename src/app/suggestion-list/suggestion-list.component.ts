import { Component } from '@angular/core';
import { ComplainService } from '../services/complain.service';
import { AccountService } from '../services/account.service';
import { Suggestion } from '../data/suggestion';

interface user {
  id: string;
  name: string;
}

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent {

  users: user[] = [];

  displayedColumns: string[] = ['name', 'phone' , 'suggestions' , 'sendto'] ;

  dataSource = [];
  //liUsers = [];

  
  constructor(private complainService:ComplainService,
    private accountService: AccountService){}

  ngOnInit(): void {
    this.GetAllSuggestions();
    this.getUserList();
  }

  GetAllSuggestions(){
    this.complainService.LoadAllSuggestions().subscribe({
      next:data=>{
        this.dataSource = data
      },
      error:err=>{
        alert("Error happend!")

      }
    })

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

  AssignTo(User_Id: any, Suggestion_id: number,name:string,phone:string,suggestions:string) {
    debugger
    console.log(User_Id)
    console.log(Suggestion_id)
    var obj=new Suggestion();
    obj.id=Suggestion_id;
    obj.User_Id=User_Id;
    obj.name=name;
    obj.phone=phone;
    obj.suggestions=suggestions;
    this.complainService.SendSuggestion(obj).subscribe({
      next:data=>{
        alert("sending successfuly")
      },

      error:err=>{
        alert("error happend!")
      }
    })

  }



  
  }
