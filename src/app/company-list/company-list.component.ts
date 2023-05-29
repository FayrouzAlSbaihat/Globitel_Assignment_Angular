import { Component, OnInit } from '@angular/core';
import { Company } from '../data/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  phone: string;
  sector: string;
  size: number;
}


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'size', 'sector_Id', 'action'];

  dataSource = [];

  fileName= 'ExcelSheet.xlsx';

  constructor(private companyService: CompanyService,private router:Router) { }

  ngOnInit(): void {
    this.LoadAllCompanies();
  }
  LoadAllCompanies() {

    this.companyService.LoadCompanyList().subscribe({
      next: data => {
        debugger;
        console.log(data)
        this.dataSource = data
      },
      error: err => {
        console.log((err))
      }
    })
  }


  DeleteCompany(Id: number) {
    debugger
    this.companyService.Delete(Id).subscribe({
      next: data => {
        this.LoadAllCompanies()
        alert("Deleted")
      },
      error: err => {
        alert("error happend!")
      }
    })

  }
  onEdit(companyId: number) {
    this.router.navigate(['/Home/NewCompany'],{queryParams:{Id:companyId}})
  }


  ExportToExcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
