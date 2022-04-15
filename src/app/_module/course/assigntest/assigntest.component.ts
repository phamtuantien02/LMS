import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../service/course.service';
import { testService } from '../../managetest/service/managetest.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-assigntest',
  templateUrl: './assigntest.component.html',
  styles: [
  ]
})
export class AssigntestComponent implements OnInit {

  @Input() course:any;
  TestList: any=[];
  TestIds: any=[];
  constructor(private service:CourseService, private testService: testService,private toaster: ToastrService) { }

  CourseID:string = "";

  ngOnInit(): void {
    this.CourseID = this.course.CourseID;

    this.TestList = this.testService.gettestList().subscribe(data=>{
      this.TestList = data;
    });

  }
  saveCourseId(id:any){
    if(this.TestIds.includes(id)){
      const index = this.TestIds.indexOf(id, 0); 
      if (index > -1) {
        this.TestIds.splice(index, 1);
      }
    }
    else{
        this.TestIds.push(id);
    }
  }
  assignTest()
  {
    var val =  {CourseId:this.CourseID,
              TestIds:this.TestIds};

    this.service.AssignTestToCourse(val).subscribe(res=>{
      this.toaster.success(res.toString());
    })
  }
}
