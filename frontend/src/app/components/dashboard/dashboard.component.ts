import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { studentModel } from './student-module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
studentValue!:FormGroup;
studentObj:studentModel = new studentModel;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentValue= this.formBuilder.group({
      name:[''],
      class:[''],
      email:[''],
      phone:['']
    });
  }

  addStudent(){
    // this.studentObj.name = this.formValue.value.name;
    // this.studentObj.email = this.formValue.value.email;
    // this.studentObj.phone = this.formValue.value.phone;
    // this.studentObj.class = this.formValue.value.class;
    //this.studentObj. = this.formValue.value.name;
    
  }

  

}
