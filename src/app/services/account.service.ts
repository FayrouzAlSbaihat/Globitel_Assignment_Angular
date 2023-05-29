import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../data/signup';
import { SignIn } from '../data/signIn';
import { environment } from 'src/environments/environment';
import { Role } from '../data/role';
import { UserRoles } from '../data/userRole';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  baseUrl=''

  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl +'/api/Account'
  }

  CreateAccount(user:SignUp):Observable<any>{
    // return this.httpClient.post("http://localhost/globitelassignment/api/Account/SignUp",user)
    return this.httpClient.post(this.baseUrl+ '/SignUp',user)
  }


  SignIn(user:SignIn):Observable<any>{  
   return this.httpClient.post("http://localhost/globitelassignment/api/Account/Login",user)
    //return this.httpClient.post(this.baseUrl+ '/Login',user)
   }

   userList():Observable<any>{
    return this.httpClient.get("http://localhost/globitelassignment/api/Account/UserList")
  }

  DeleteUser(Id:number):Observable<any>{
    return this.httpClient.get("http://localhost/globitelassignment/api/Account/Delete?Id="+Id)
  }

  newRole(role:Role):Observable<any>{
    return this.httpClient.post("http://localhost/globitelassignment/api/Account/AddRole",role)
  }

  getUserRoles(user_Id:number):Observable<any>{
    return this.httpClient.get("http://localhost/globitelassignment/api/Account/UserRoles?UserId="+user_Id)
  }

  logout():Observable<any>{
    return this.httpClient.get("http://localhost/globitelassignment/api/Account/LogOut")
  }


  UpdateRoles(userRoles:UserRoles[]):Observable<any>{
    return this.httpClient.post("http://localhost/globitelassignment/api/Account/UpdateRole",userRoles)
  }

  NumOfUsers():Observable<any>{
    return this.httpClient.get("http://localhost/globitelassignment/api/Account/NumOfUsers")
  }

}
