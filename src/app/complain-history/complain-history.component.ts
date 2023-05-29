import { Component } from '@angular/core';
import { ComplainService } from '../services/complain.service';

@Component({
  selector: 'app-complain-history',
  templateUrl: './complain-history.component.html',
  styleUrls: ['./complain-history.component.css']
})
export class ComplainHistoryComponent {
  displayedColumns: string[] = ['name', 'phone', 'descriptionComplains'];

  dataSource = [];
  liUsers = [];
  user_Id: string = "";
  constructor(private complainService: ComplainService) { }

  ngOnInit(): void {
    this.LoadAllComplains();
  }

  LoadAllComplains() {
    let User_id = localStorage.getItem("User_id");
    this.complainService.ComplainsListByEmployee(String(User_id)).subscribe({
      next: data => {
        this.dataSource = data
      },
      error: err => {
        alert("Error happend!")

      }
    })

  }

}
