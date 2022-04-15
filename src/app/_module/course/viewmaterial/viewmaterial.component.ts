import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-viewmaterial',
  templateUrl: './viewmaterial.component.html',
  styleUrls: ['./viewmaterial.component.css']
})
export class ViewmaterialComponent implements OnInit {
  isCourseCompleted:boolean = false;
  currentSlide : number = 0;
  courseID : string = "";
  courseSlides:any = [];
  
  constructor(private activatedroute: ActivatedRoute ,private service: CourseService) { }

  ngOnInit(): void {
    this.courseID = this.activatedroute.snapshot.paramMap.get("CourseID")!;
    var val = {
      CourseId : this.courseID
    };
    this.service.getCourseSlideByID(val).subscribe(data=>{
      this.courseSlides = data;
    })
  }
  previousSlide()
  {
    this.currentSlide --;
  }
  nextSlide()
  {
    this.currentSlide ++; 
    if(this.currentSlide >= this.courseSlides.length)
    {
      this.isCourseCompleted = true;
    }
  }
}
