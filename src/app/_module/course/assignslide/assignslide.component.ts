import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../service/course.service';
import { SlideService } from '../../courseslide/service/slide.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-assignslide',
  templateUrl: './assignslide.component.html',
  styles: [
  ]
})
export class AssignslideComponent implements OnInit {

  @Input() course:any;
  SlideList: any=[];
  SlideIds: any=[];
  constructor(private service:CourseService, private slideService: SlideService,private toast:ToastrService) { }

  CourseID:string = "";

  ngOnInit(): void {
    this.CourseID = this.course.CourseID;

    this.SlideList = this.slideService.getSlideList().subscribe(data=>{
      this.SlideList = data;
    });

  }
  saveCourseId(id:any){
    if(this.SlideIds.includes(id)){
      const index = this.SlideIds.indexOf(id, 0); 
      if (index > -1) {
        this.SlideIds.splice(index, 1);
      }
    }
    else{
        this.SlideIds.push(id);
    }
  }
  assignSlide()
  {
    var val =  {CourseId:this.CourseID,
                SlideIds:this.SlideIds};

    this.service.AssignSlideToCourse(val).subscribe(res=>{
      this.toast.success(res.toString());
    })
  }
}
