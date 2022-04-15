import { Component, OnInit } from '@angular/core';
import { SlideService } from '../service/slide.service';
@Component({
  selector: 'app-show-Slide',
  templateUrl: './show-Slide.component.html',
  styleUrls: ['./show-Slide.component.css']
})
export class ShowSlideComponent implements OnInit {

  constructor(private service: SlideService) { }

  SlideList:any=[];
  ModalTitle:string = "";
  ActivateAddEditSlideComp:boolean = false;
  Slide:any;
  SlideIdFilter:string="";
  SlideNameFilter:string="";
  SlideListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshSlideList();
  }
  addClick()
  {
    this.Slide={
      SlideID:"0",
      SlideContent:"",

    }
    this.ModalTitle="Add Slide";
    this.ActivateAddEditSlideComp = true;
  }
  closeClick()
  {
    this.ActivateAddEditSlideComp = false;
    this.refreshSlideList();
  }
  refreshSlideList()
  {
    this.service.getSlideList().subscribe(data=>{
      this.SlideList = data;
      this.SlideListWithoutFilter = data;
    });
  }
  editClick(item:any)
  {
    this.Slide = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditSlideComp = true;
  }
  deleteClick(item:any)
  {
    if(confirm('Are you sure?'))
    {
      this.service.deleteSlide(item.SlideID).subscribe(data=>{
        alert(data.toString());
        this.refreshSlideList();
      })
    }
  }
  FilterFn()
  {
    var SlideIdFilter = this.SlideIdFilter;
    var SlideNameFilter = this.SlideNameFilter;

    this.SlideList = this.SlideListWithoutFilter.filter(function(el:any){
      return el.SlideID.toString().toLowerCase().includes(
        SlideIdFilter.toString().trim().toLowerCase()
      )&&
      el.SlideName.toString().toLowerCase().includes(
        SlideNameFilter.toString().trim().toLowerCase()
      )
    });
  }
  sortResult(prop:any,asc:any)
  {
    this.SlideList = this.SlideListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return(a[prop]>b[prop])? 1 :((a[prop]<b[prop])?-1:0);
      }else{
        return(b[prop]>a[prop])? 1 :((b[prop]<a[prop])?-1:0);
      }
    })
  }
}
