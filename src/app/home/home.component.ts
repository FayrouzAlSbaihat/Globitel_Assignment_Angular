import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name!:string
  UserRole !:any ;
 
  constructor(private activatedRoute:ActivatedRoute,
              private accountService:AccountService,
              private router:Router){}

  ngOnInit(): void {
    debugger
    this.UserRole=localStorage.getItem("Roles")
    this.name=this.activatedRoute.snapshot.queryParams["username"]
    
  }

  logout(){
    debugger
    this.accountService.logout().subscribe({
      next:data=>{ 
        this.router.navigate([''])
      },
      error:err=>
      alert("error happend")
      
    })
}


}
