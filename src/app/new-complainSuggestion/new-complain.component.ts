import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplainService } from '../services/complain.service';
import { Complain } from '../data/complain';
import { Suggestion } from '../data/suggestion';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.css']
})
export class NewComplainComponent implements OnInit{
  
  forms!:FormGroup

  constructor(private formBuilder:FormBuilder,
              private complainService:ComplainService){}
 
 
  ngOnInit(): void {
    this.buildForm()  
  }

  buildForm(){
    this.forms=this.formBuilder.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      comment:['',Validators.required]
    })
  }

  SendComplain(){
    debugger
    if(this.forms.valid){
      debugger
      var obj=new Complain();
      obj.name=this.forms.value["name"],
      obj.phone=this.forms.value["phone"],
      obj.DescriptionComplains=this.forms.value["comment"]
  
      this.complainService.AddNewComplain(obj).subscribe({
        next:data=>{
          alert("The complain was sent successfully")
        },
        error:err=>{
          alert("error in sending a new complain")
        }
      })
  
    }
  }

  SendSuggestion(){
    debugger
    if(this.forms.valid){
      debugger
      var obj=new Suggestion();
      obj.name=this.forms.value["name"],
      obj.phone=this.forms.value["phone"],
      obj.suggestions=this.forms.value["comment"]
  
      this.complainService.AddNewSuggestion(obj).subscribe({
        next:data=>{
          alert("The Suggestion was sent successfully")
        },
        error:err=>{
          alert("error in sending a new Suggestion")
        }
      })
  
    }
  }


  }

