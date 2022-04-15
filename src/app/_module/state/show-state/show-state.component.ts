import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
@Component({
  selector: 'app-show-state',
  templateUrl: './show-state.component.html',
  styleUrls: ['./show-state.component.css']
})
export class ShowStateComponent implements OnInit {

  constructor(private service: StateService) { }

  StateList:any=[];

  ModalTitle:string = "";
  ActivateAddEditStateComp:boolean = false;
  state:any;

  StateIdFilter:string="";
  StateNameFilter:string="";
  StateListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshStateList();
  }

  addClick()
  {
    this.state={
      StateID:"0",
      StateName:"",
      StateAbbr:""
    }
    this.ModalTitle="Add State";
    this.ActivateAddEditStateComp = true;
  }

  closeClick()
  {
    this.ActivateAddEditStateComp = false;
    this.refreshStateList();
  }
  refreshStateList()
  {
    this.service.getStateList().subscribe(data=>{
      this.StateList = data;
      this.StateListWithoutFilter = data;
    });
  }
  editClick(item:any)
  {
    this.state = item;
    this.ModalTitle = "Edit State";
    this.ActivateAddEditStateComp = true;
  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure?'))
    {
      this.service.deleteState(item.StateID).subscribe(data=>{
        alert(data.toString());
        this.refreshStateList();
      })
    }
  }

  FilterFn()
  {
    var StateIdFilter = this.StateIdFilter;
    var StateNameFilter = this.StateNameFilter;

    this.StateList = this.StateListWithoutFilter.filter(function(el:any){
      return el.StateID.toString().toLowerCase().includes(
        StateIdFilter.toString().trim().toLowerCase()
      )&&
      el.StateName.toString().toLowerCase().includes(
        StateNameFilter.toString().trim().toLowerCase()
      )
    });
  }


  sortResult(prop:any,asc:any)
  {
    this.StateList = this.StateListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return(a[prop]>b[prop])? 1 :((a[prop]<b[prop])?-1:0);
      }else{
        return(b[prop]>a[prop])? 1 :((b[prop]<a[prop])?-1:0);
      }
    })
  }

}
