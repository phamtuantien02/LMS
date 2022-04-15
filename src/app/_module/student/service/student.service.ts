import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student-model';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/_core/service/api.service';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
readonly APIUrl = "http://localhost:60769/api"

  constructor(private http:HttpClient,private apiService: ApiService) { }

  AssignCourseToStudent(val:any)
  {
    return this.apiService.post('Student/assignCourse',val);
  }

  getStudentList():Observable<any>
  {
    return this.apiService.get('Student');
  }
  addStudent(val:any)
  {
    return this.apiService.post('Student',val);
  }
  updateStudent(val:any)
  {
    return this.apiService.put('Student',val);
  }
  deleteStudent(val:any)
  {
    return this.apiService.delete('Student/'+val);
  }

  getStudentCourseList():Observable<any[]>
  {
    return this.apiService.get('Student/getStudentCourse');
  }
  getStudentbyID():Observable<any[]>
  {
    return this.apiService.get('Student/getStudentInfoByID');
  }

  getStudentbyID2()
  {
    return this.apiService.get('Student/getStudentInfoByID2');
  }
}
