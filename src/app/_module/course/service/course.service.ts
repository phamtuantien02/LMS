import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/service/api.service';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http:HttpClient, private api: ApiService) { }
  AssignSlideToCourse(val:any)
  {
    return this.api.post('Course/AssignSlideToCourse',val);
  }
  AssignTestToCourse(val:any)
  {
    return this.api.post('Course/AssignTestToCourse',val);
  }
  getCourseList():Observable<any[]>
  {
    return this.api.get('Course');
  }
  addCourse(val:any)
  {
    return this.api.post('Course',val);
  }
  updateCourse(val:any)
  {
    return this.api.put('Course',val);
  }

  deleteCourse(val:any)
  {
    return this.api.delete('Course/'+val);
  }

  getAllCourseNames():Observable<any[]>
  {
    return this.api.get('GetAllCourses');
  }
  
  getCourseSlideByID(val:any):Observable<any[]>
  {
    return this.api.post('course/getCourseSlideByID',val);
  }

  getTestInfoByCourseID(val:any):Observable<any[]>
  {
    return this.api.post('Test/getTestInfoByCourseID',val);
  }
}
