import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Company } from '../data/company';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']

})
export class NewCompanyComponent implements OnInit {

  forms!: FormGroup
  Id!: number
  UserRole = localStorage.getItem("Roles");

  constructor(private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }
  ngOnInit() {
    this.Id = Number(this.activatedRoute.snapshot.queryParamMap.get('Id'))
    if (this.Id) {
      this.Edit(this.Id);
    }
    this.buildForm()
  }

  buildForm() {
    this.forms = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      sector_Id: ['', Validators.required],
      size: ['', Validators.required],
    })
  }



  onSave() {
    debugger
    if (this.forms.valid) {
      debugger
      var obj = new Company();
      obj.name = this.forms.value["name"],
        obj.email = this.forms.value["email"],
        obj.phone = this.forms.value["phone"],
        obj.sector_Id = this.forms.value["sector_Id"],
        obj.size = this.forms.value["size"]


      this.companyService.CreateNewCompany(obj).subscribe({
        next: data => {
          alert("Added Company successfuly")
        },
        error: err => {
          alert("error in Adding a new company")
        }
      })

    }
  }

  Edit(Id: number) {

    this.companyService.EditCompany(Id).subscribe({
      next: data => {
        if (data) {
          this.forms.setValue({
            name: data.name,
            phone: data.phone,
            email: data.email,
            sector_Id: data.sector_Id,
            size: data.size
          })

        }
      },
      error: err => {
        alert("error happned")
      }
    })

  }
  onEdit() {
    if (this.forms.valid) {
      debugger
      var obj = new Company();
      obj.id = this.Id
      obj.name = this.forms.value["name"],
      obj.email = this.forms.value["email"],
      obj.phone = this.forms.value["phone"],
      obj.sector_Id = this.forms.value["sector_Id"],
      obj.size = this.forms.value["size"]
      
      this.companyService.UpdateCompany(obj).subscribe({
        next: data => {
          alert("Updated Company successfuly")
          this.router.navigate(['/Home/CompanyList'])
        },
        error: err => {
          alert("error in Updating a new company")
        }
      })

    }
  }
}
