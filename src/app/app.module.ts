import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NewCompanyComponent } from './new-company/new-company.component';
import { MatSelectModule } from '@angular/material/select';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { NgIf, NgFor } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { NewComplainComponent } from './new-complainSuggestion/new-complain.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { ComplainHistoryComponent } from './complain-history/complain-history.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { SuggestionHistoryComponent } from './suggestion-history/suggestion-history.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { SignIn } from './data/signIn';
// import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewCompanyComponent,
    SignUpComponent,
    HomeComponent,
    CompanyListComponent,
    NewComplainComponent,
    ComplainListComponent,
    SuggestionListComponent,
    UserListComponent,
    NewRoleComponent,
    ComplainHistoryComponent,
    UserRolesComponent,
    SuggestionHistoryComponent,
    DashBoardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    MatStepperModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [SignIn],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private translate: TranslateService) {
   // translate.setDefaultLang('en');
     translate.use('en');
  }
}

  export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http,'./assets/i18n/','.json');


}