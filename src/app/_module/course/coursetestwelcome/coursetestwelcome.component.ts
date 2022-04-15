import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursetestwelcome',
  templateUrl: './coursetestwelcome.component.html',
  styleUrls: []
})

export class CoursetestwelcomeComponent implements OnInit {
  courseID : string = "";
  testInfo : any;
  constructor(private service: CourseService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseID = this.activatedroute.snapshot.paramMap.get("CourseID")!;
    var val = {
      CourseId : this.courseID
    };
    this.service.getTestInfoByCourseID(val).subscribe(data=>{
      this.testInfo = data[0];
    })
  }
}
