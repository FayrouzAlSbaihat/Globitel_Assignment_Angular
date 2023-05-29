import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ComplainService } from '../services/complain.service';

@Component({
  selector: 'app-suggestion-history',
  templateUrl: './suggestion-history.component.html',
  styleUrls: ['./suggestion-history.component.css']
})
export class SuggestionHistoryComponent{

  displayedColumns: string[] = ['name', 'phone', 'suggestions'];
  dataSource = [];
  liUsers = [];
  user_Id: string = "";

  constructor(private complainService: ComplainService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.LoadAllSuggestion();
  }

  LoadAllSuggestion() {
    let User_id = localStorage.getItem("User_id");
    this.complainService.SuggestionListByEmployee(String(User_id)).subscribe({
      next: data => {
        this.dataSource = data
      },
      error: err => {
        alert("Error happend!")

      }
    })

  }



}
