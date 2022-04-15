import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
})
export class AddEditCourseComponent implements OnInit {

  constructor(private service:CourseService,private toaster:ToastrService) { }
  @Input() course:any;

  CourseId:string = "";
  CourseCode:string = "";
  CourseName:string = "";
  CourseCredit:string = "";
  isNew:boolean = false;
  
  ngOnInit(): void {
      this.CourseId = this.course.CourseId;
      this.CourseCode = this.course.CourseCode;
      this.CourseName = this.course.CourseName;
      this.CourseCredit = this.course.CourseCredit;
      if(this.CourseId == "0")
      {
        this.isNew =  true;
      }
  }
  addCourse()
  {
    var val =  {CourseId:this.CourseId,
                CourseCode:this.CourseCode,
                CourseName:this.CourseName,
                CourseCredit:this.CourseCredit};

    this.service.addCourse(val).subscribe(res=>{
        this.toaster.success(res.toString());
    })
  }
  updateCourse()
  {
    var val =  {CourseId:this.CourseId,
              CourseCode:this.CourseCode,
              CourseName:this.CourseName,
              CourseCredit:this.CourseCredit};

    this.service.updateCourse(val).subscribe(res=>{
      this.toaster.success(res.toString());
    })
  }
}
