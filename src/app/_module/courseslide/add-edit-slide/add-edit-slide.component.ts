import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SlideService } from '../service/slide.service';

@Component({
  selector: 'app-add-edit-Slide',
  templateUrl: './add-edit-slide.component.html',
})
export class AddEditSlideComponent implements OnInit {

  constructor(private service:SlideService,private toaster:ToastrService) { }
  @Input() Slide:any;

  SlideID:string = "";
  SlideContent:string = "";
  isNew:boolean = false;
  
  ngOnInit(): void {
    this.SlideID = this.Slide.SlideID;
    this.SlideContent = this.Slide.SlideContent;
    if(this.SlideID == "0")
    {
      this.isNew =  true;
    }
  }
  addSlide()
  {
    var val =  {SlideID:this.SlideID,
                SlideContent:this.SlideContent};
    this.service.addSlide(val).subscribe(res=>{
      alert(res.toString());
    })
  }
  updateSlide()
  {
    var val =  {SlideID:this.SlideID,
                SlideContent:this.SlideContent};
    this.service.updateSlide(val).subscribe(res=>{
      this.toaster.success(res.toString());
    })
  }
}
