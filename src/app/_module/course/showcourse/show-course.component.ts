import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-show-allcourse',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {

  constructor(private service: CourseService) { }

  CourseList:any=[];
  ModalTitle:string = "";
  ActivateAddEditStateComp:boolean = false;
  course:any;
  ShowAssignTest:boolean = false;
  ShowAssignSlide:boolean =false;
  IdFilter:string="";
  NameFilter:string="";
  ListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  addClick()
  {
    this.course={
      CourseId:"0",
      CourseCode:"",
      CourseName:"",
      CourseCredit:""
    }
    this.resetModal();
    this.ModalTitle="Add Course";
    this.ActivateAddEditStateComp = true;
  }
  closeClick()
  {
    this.ActivateAddEditStateComp = false;
    this.ShowAssignTest = false;
    this.ShowAssignSlide = false;
    this.refreshList();
  }
  refreshList()
  {
    this.service.getCourseList().subscribe(data=>{
      this.CourseList = data;
      this.ListWithoutFilter = data;
    });
  }
  editClick(item:any)
  {
    this.resetModal();
    this.course = item;
    this.ModalTitle = "Edit Course";
    this.ActivateAddEditStateComp = true;
  }
  deleteClick(item:any)
  {
    if(confirm('Are you sure?'))
    {
      this.service.deleteCourse(item.CourseID).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }
  FilterFn()
  {
    var IdFilter = this.IdFilter;
    var NameFilter = this.NameFilter;

    this.CourseList = this.ListWithoutFilter.filter(function(el:any){
      return el.CourseID.toString().toLowerCase().includes(
          IdFilter.toString().trim().toLowerCase()
      )&&
      el.CourseName.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
      )
    });
  }
  assignTestClick(item:any)
  {
    this.course = item;
    this.ModalTitle = "Assign Test To Course: "+ item.CourseName;
    this.resetModal();
    this.ShowAssignTest = true;
  }
  assignSlideClick(item:any)
  {
    this.course = item;
    this.ModalTitle = "Assign Slide To Course: "+ item.CourseName;
    this.resetModal();

    this.ShowAssignSlide = true;
  }
  resetModal(){
    this.ActivateAddEditStateComp = false;
    this.ShowAssignTest = false;
    this.ShowAssignSlide = false;
  }
  sortResult(prop:any,asc:any)
  {
    this.CourseList = this.ListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return(a[prop]>b[prop])? 1 :((a[prop]<b[prop])?-1:0);
      }else{
        return(b[prop]>a[prop])? 1 :((b[prop]<a[prop])?-1:0);
      }
    })
  }
}
