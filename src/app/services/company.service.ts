import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../data/company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl=''

  constructor(private httpClient:HttpClient) { 
    
    this.baseUrl=environment.APIUrl +'/api/Company'
  }

  CreateNewCompany(company:Company):Observable<any>{
    return this.httpClient.post(this.baseUrl+'/NewCompany',company)
  }

  LoadCompanyList():Observable<any>{
     return this.httpClient.get(this.baseUrl+'/CompanyList')
  // return this.httpClient.get("http://localhost/globitelassignment/api/Company/CompanyList"); 
}

Delete(Id:number):Observable<any>{
  return this.httpClient.get("http://localhost/globitelassignment/api/Company/Delete?Id="+Id)
}
EditCompany(Id: number): Observable<any> {
  return this.httpClient.get("http://localhost/globitelassignment/api/Company/EditCompany?Id=" + Id)
}

UpdateCompany(company:Company):Observable<any>{
  return this.httpClient.post("http://localhost/globitelassignment/api/Company/UpdateCompany",company)
}

NumberOfCompany():Observable<any>{
  return this.httpClient.get(this.baseUrl+'/NumOfCompanies')
}

}
