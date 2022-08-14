import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studentModel } from '../components/dashboard/student-module';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


//post

postStudent(data:any){
  return this.http.post<any>("http://localhost:3000/post",data).pipe(
    map(
      (res => {
        return res
      })
    )
  )
}
//pgAdmin
addStudent(contact: any) {
  return this.http.post(`${this.baseUrl}` + '/student',contact)
}



getStudent(){
  return this.http.get<any>("http://localhost:3000/post/").pipe(
    map(
      (res => {
        return res
      })
    )
  ) 
}
//GetAll pgAdmin
getAllStudent() {
  return this.http.get(`${this.baseUrl}` + '/student',{
   
});
}
//get One pgAdmin
getStudentBy(id: any) {
  return this.http.get(`${this.baseUrl}` + `/student/${id}`);
}



//update student

//Json-Server
putStudent(data:any,id:any){
  return this.http.put<any>("http://localhost:3000/post/"+id,data).pipe(
    map(
      (res => {
        return res
      })
    )
  )
}
//pgAdmin
updateStudent(info:any,id:studentModel) {
  return this.http.put(`${this.baseUrl}` + `/student/${id.id}`,info)
}


///delete Student    

// json-Server
deleteStudent(id:number){
  return this.http.delete<any>("http://localhost:3000/post/"+id).pipe(
    map(
      (res => {
        return res
      })
    )
  )
}

// pgAmin
deleteContact(id: number) {
  return this.http.delete(`${this.baseUrl}` + `/student/${id}`);
}



} 