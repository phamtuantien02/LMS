import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { testService } from '../service/managetest.service';
@Component({
  selector: 'app-add-edit-test',
  templateUrl: './add-edit-test.component.html',
})
export class AddEdittestComponent implements OnInit {

  constructor(private service:testService,private toaster:ToastrService) { }
  @Input() test:any;

  testID:string = "";
  numQuest:string = " ";
  testAttempts:string = " ";
  passingScore:string = " ";
  isNew:boolean = false;
  
  ngOnInit(): void {
    this.testID = this.test.testID;
    this.numQuest = this.test.NumberOfQuestions;
    this.testAttempts = this.test.AttemptsAllowed;
    this.passingScore = this.test.PassingScore;
    if(this.testID == "0")
    {
      this.isNew =  true;
    }
  }
  addtest()
  {
    var val =  {testID:this.testID,
      numQuest:this.numQuest,
      testAttempts:this.testAttempts,
      passingScore:this.passingScore         };
    this.service.addtest(val).subscribe(res=>{
      alert(res.toString());
    })
  }
  updatetest()
  {
    var val =  {testID:this.testID,
      numQuest:this.numQuest,
      testAttempts:this.testAttempts,
      passingScore:this.passingScore         };
    this.service.updatetest(val).subscribe(res=>{
      this.toaster.success(res.toString());
    })
  }
}
