import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,AbstractControl,FormControl,ReactiveFormsModule, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { studentModel } from './student-module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //pg
x = {};
serve = {};

submitted = false;
errorMessage: string = ''


//json
studentValue!:FormGroup; 

studentObj:studentModel = new studentModel;

studentList:any =[ ]

btnSaveShow:boolean =true;

btnUpdateShow:boolean=false;

  constructor( private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router, 
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.studentValue= this.formBuilder.group({
      name:[''],
      class:[''],
      email:[''],
      phone:['']
    });
    this.getStudent();
    this.getList();
    console.log(this.serve);
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
 this.api.getStudent().subscribe(res=>{ 
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


 }
updateStudent(){
  this.studentObj.name = this.studentValue.value.name;
    this.studentObj.email = this.studentValue.value.email;
     this.studentObj.phone = this.studentValue.value.phone;
     this.studentObj.class = this.studentValue.value.class;

     this.api.putStudent(this.studentObj,this.studentObj.id).subscribe({next:(v)=>{
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



  //// 

    ///add part
    get f(): { [key: string]: AbstractControl } {
      return this.studentValue.controls;
    }
  
    contact: any;
  
    onSubmit() {
  
      this.serve = {
        full_name: this.studentValue.value.full_name,
        email: this.studentValue.value.email,
        cell_phone: this.studentValue.value.cell_phone,
        company: this.studentValue.value.company,
        title: this.studentValue.value.title,
        photoUrl: this.studentValue.value.photoUrl,
      };
      console.log(this.serve);
  
      this.api.addStudent(this.serve).subscribe(err => {
        console.log("this" + err.toString());
      }
      )
  
    }
  
    save() {
      this.submitted = true;
      let user = {
        full_name: this.studentValue.value.full_name,
        email: this.studentValue.value.email,
        cell_phone: this.studentValue.value.cell_phone,
        company: this.studentValue.value.company,
        title: this.studentValue.value.title,
        photoUrl: this.studentValue.value.photoUrl,
      }
       localStorage.setItem('session', JSON.stringify(this.serve));
  
    }
  getList() {
    return this.api.getAllStudent().subscribe((data: any) => {
      this.x = (data);
      console.log(data);
    });
  }


///edit

getStudentById(id:number){
  return this.api.getStudentBy(id).subscribe((respond : any) => {
    this.contact = respond[0]
  },(error)=>{
    this.errorMessage=error;
  })
}

update(student:studentModel){
  this.api.updateStudent(student, student).subscribe({
    next:data => {
      // this.router.navigate(['/contact/view'])
    }
  })
}
}



