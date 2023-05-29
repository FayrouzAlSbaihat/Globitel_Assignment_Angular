import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NewComplainComponent } from './new-complainSuggestion/new-complain.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ComplainHistoryComponent } from './complain-history/complain-history.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { SuggestionHistoryComponent } from './suggestion-history/suggestion-history.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'Home', component:HomeComponent,canActivate:[AuthenticationGuard],children:[

  { path: 'NewCompany', component: NewCompanyComponent },
  { path: 'SignUp', component:SignUpComponent },
  { path: 'CompanyList', component:CompanyListComponent},
  { path: 'NewComplain', component:NewComplainComponent},
  { path: 'SuggestionList', component:SuggestionListComponent},
  { path: 'ComplainList', component:ComplainListComponent},
  { path: 'UserList', component:UserListComponent},
  { path: 'ComplainHistory', component:ComplainHistoryComponent},
  { path: 'NewRole', component:NewRoleComponent},
  { path: 'UserRoles', component:UserRolesComponent},
  { path: 'SuggestionHistory', component:SuggestionHistoryComponent},
  { path: 'DashBoard', component:DashBoardComponent},

  
]}

  
  // {path:'home', component:HomeComponent,canActivate:[AuthenticationGuard],children:[
  // { path: 'NewCompany', component: NewCompanyComponent },
  // { path: 'SignUp', component:SignUpComponent },
  // { path: 'CompanyList', component:CompanyListComponent},

  // ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
