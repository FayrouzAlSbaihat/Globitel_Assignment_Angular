import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Complain } from '../data/complain';
import { Observable } from 'rxjs';
import { Suggestion } from '../data/suggestion';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  baseUrl = ''

  constructor(private httpClient: HttpClient) {

    this.baseUrl = environment.APIUrl + '/api/Complain'

  }

  AddNewComplain(complain: Complain): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/NewComplain', complain)
  }

  LoadAllComplains(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/ComplainsList')
  }

  AddNewSuggestion(suggestion: Suggestion): Observable<any> {
    return this.httpClient.post("http://localhost/globitelassignment/api/Suggestion/NewSuggestion", suggestion)
  }

  LoadAllSuggestions(): Observable<any> {
    return this.httpClient.get("http://localhost/globitelassignment/api/Suggestion/SuggestionList")
  }
  ComplainsListByEmployee(User_id: string): Observable<any> {
    return this.httpClient.get("http://localhost/globitelassignment/api/Complain/ComplainsListByEmployee?User_id="+ User_id)
  }
  SendComplain(complain: Complain): Observable<any> {
    return this.httpClient.post("http://localhost/globitelassignment/api/Complain/SendComplain", complain)
  }

  SendSuggestion(suggestion: Suggestion): Observable<any> {
    return this.httpClient.post("http://localhost/globitelassignment/api/Suggestion/SendSuggestion", suggestion)
  }

  SuggestionListByEmployee(User_id: string): Observable<any> {
    return this.httpClient.get("http://localhost/globitelassignment/api/Suggestion/SuggestionsListByEmployee?User_id="+ User_id)
  }

  NumberOfComplains(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/NumOfComplains')
  }

  NumberOfSuggestion(): Observable<any> {
    return this.httpClient.get("http://localhost/globitelassignment/api/Suggestion/NumOfSuggestion")
  }





}
