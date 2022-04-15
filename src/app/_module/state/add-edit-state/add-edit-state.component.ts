import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../service/state.service';
@Component({
  selector: 'app-add-edit-state',
  templateUrl: './add-edit-state.component.html',
  styleUrls: ['./add-edit-state.component.css']
})
export class AddEditStateComponent implements OnInit {

  constructor(private service:StateService) { }
  @Input() state:any;

  StateID:string = "";
  StateName:string = "";
  StateAbbr:string = "";
  isNew:boolean = false;
  
  ngOnInit(): void {
    this.StateID = this.state.StateID;
    this.StateName = this.state.StateName;
    this.StateAbbr = this.state.StateAbbr;
    if(this.StateID == "0")
    {
      this.isNew =  true;
    }
  }

  addState()
  {
    var val =  {StateID:this.StateID,
                StateName:this.StateName,  
                StateAbbr:this.StateAbbr};
    this.service.addState(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateState()
  {
    var val =  {StateID:this.StateID,
                StateName:this.StateName,
                StateAbbr:this.StateAbbr};
    this.service.updateState(val).subscribe(res=>{
      alert(res.toString());
    })
  }
}
