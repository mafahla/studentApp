import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { studentModel } from './student-module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

studentValue!:FormGroup;
studentObj:studentModel = new studentModel;
studentList:any =[ ]
btnSaveShow:boolean =true;
btnUpdateShow:boolean=false;
  constructor( private formBuilder: FormBuilder,private api: ApiService) { }

  ngOnInit(): void {
    this.studentValue= this.formBuilder.group({
      name:[''],
      class:[''],
      email:[''],
      phone:['']
    });
    this.getStudent();
  }
  
  addStudent(){
    
    this.studentObj.name = this.studentValue.value.name;
    this.studentObj.email = this.studentValue.value.email;
     this.studentObj.phone = this.studentValue.value.phone;
     this.studentObj.class = this.studentValue.value.class;

     this.api.postStudent(this.studentObj).subscribe({next:(v)=>{
      console.log(v)
     },
    error:(e)=>{
      console.log(e)
      alert("Error")
    },
  complete:()=>{
    console.log('Student record added!')
    alert("Student record added!")
    this.getStudent();
    this.studentValue.reset();
  }})
    
  }


getStudent(){
 this.api.getStudent(this).subscribe(res=>{ //error her 55.24  this.studentList = res;
this.studentList = res; 
}) 
}

deleteStudent(data:any){
  this.api.deleteStudent(data.id).subscribe({next : (v)=>{
    console.log(v)
  },
 error:(e)=>{
   console.log(e)
   alert("Error")
 },
complete:()=>{
 console.log('Student record deleted!')
 alert("Student record deleted!")
 this.getStudent();
}})
}


editStudent(data:any){
this.studentValue.controls["name"].setValue(data.name);
this.studentValue.controls["email"].setValue(data.email);
this.studentValue.controls["phone"].setValue(data.phone);
this.studentValue.controls["class"].setValue(data.class);
this.studentObj.id = data.id;
this.showUpdate()

//this.api.editStudent(data.id).subscribe({next : (v)=>{
//     console.log(v)
//   },
//  error:(e)=>{
//    console.log(e)
//    alert("Error")
//  },
// complete:()=>{
//  console.log('Student record deleted!')
//  alert("Student record deleted!")
//  this.getStudent();
// }})
 }
updateStudent(){
  this.studentObj.name = this.studentValue.value.name;
    this.studentObj.email = this.studentValue.value.email;
     this.studentObj.phone = this.studentValue.value.phone;
     this.studentObj.class = this.studentValue.value.class;

     this.api.putStudent(this.studentObj, this.studentObj.id).subscribe({next:(v)=>{
      console.log(v)
     },
    error:(e)=>{
      console.log(e)
      alert("Error")
    },
  complete:()=>{
    console.log('Student record Updated!')
    alert("Student record Updated!")
    this.getStudent();
    this.studentValue.reset();
    this.showSave()
    this.studentObj.id = 0;
  }})

}
showSave(){
this.btnSaveShow=true;
this.btnUpdateShow=false;
}
showUpdate(){
  this.btnSaveShow=false;
  this.btnUpdateShow=true;
  }


}
