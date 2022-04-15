import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../course/service/course.service';
import { StudentService } from '../service/student.service';
import { NgForm,FormsModule,FormArray } from '@angular/forms';

@Component({
  selector: 'app-assigncourse',
  templateUrl: './assigncourse.component.html',
  styles: [
  ]
})
export class AssigncourseComponent implements OnInit {
  @Input() student:any;
  CourseList: any=[];
  CourseIds: any=[];
  constructor(private service:StudentService, private courseService: CourseService) { }

  StudentId:string = "";
  isNew:boolean = false;
 

  ngOnInit(): void {
    this.StudentId = this.student.StudID;
    if(this.StudentId == "0")
    {
      this.isNew =  true;
    }
    this.CourseList = this.courseService.getCourseList().subscribe(data=>{
      //console.log(data);
      this.CourseList = data;
      
    });

  }
  saveCourseId(id:any){
    if(this.CourseIds.includes(id)){
      const index = this.CourseIds.indexOf(id, 0); 
      if (index > -1) {
        this.CourseIds.splice(index, 1);
      }
    }
    else{
        this.CourseIds.push(id);
    }
    console.log(this.CourseIds);
  }
  assignCourse()
  {
    var val =  {StudID:this.StudentId,
              CourseIds:this.CourseIds};
              console.log(val);
    this.service.AssignCourseToStudent(val).subscribe(res=>{
      alert(res.toString());
    })
  }
  
}