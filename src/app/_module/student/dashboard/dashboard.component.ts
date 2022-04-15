import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private service: StudentService) { }
  studentCourse: any = [];
  
  ngOnInit(): void {
    this.service.getStudentCourseList().subscribe(data=>{
      this.studentCourse = data;
    });
  }

}
