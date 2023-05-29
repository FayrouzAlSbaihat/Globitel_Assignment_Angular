import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ComplainService } from '../services/complain.service';
import { CompanyService } from '../services/company.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  NUmUser!: number
  NUmComany!: number
  NumComplain!: number
  NumSuggestion!: number
  constructor(private breakpointObserver: BreakpointObserver,
    private complainervice: ComplainService,
    private companyService: CompanyService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.NoOfCompany()
    this.NoOfUser()
    this.NoOfSuggestion()
    this.NoOfComplains()
  }


  NoOfCompany() {
    this.companyService.NumberOfCompany().subscribe({
      next: data => {
        this.NUmComany = data
      },
      error: err => {
        alert("Error Happened !")
      }

    })
  }

  NoOfUser() {
    this.accountService.NumOfUsers().subscribe({
      next: data => {
        this.NUmUser = data
      },
      error: err => {
        alert("Error Happened !")
      }
    })
  }

  NoOfSuggestion() {
    this.complainervice.NumberOfSuggestion().subscribe({
      next: data => { this.NumSuggestion = data },
      error: err => { alert("Error Happened") }

    })
  }
  NoOfComplains() {
    this.complainervice.NumberOfComplains().subscribe({
      next: data => { this.NumComplain = data },
      error: err => { alert("Error Happened") }
    })
  }
}
