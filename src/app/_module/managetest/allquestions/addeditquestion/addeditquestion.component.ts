import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestQuestionService } from '../../service/managetestquestion.service';

@Component({
  selector: 'app-addeditquestion',
  templateUrl: './addeditquestion.component.html',
  styles: [
  ]
})
export class AddeditquestionComponent implements OnInit {
  constructor(private service:TestQuestionService,private toaster:ToastrService) { }
  @Input() QuestionParam:any;

  QuestionId:string = "";
  Question:string = "";
  isNew:boolean = false;
  
  ngOnInit(): void {
    this.QuestionId = this.QuestionParam.TestQuestionId;
    this.Question = this.QuestionParam.Question;
    if(this.QuestionId == "0")
    {
      this.isNew =  true;
    }
  }
  addQuestion()
  {
    var val =  {QuestionId:this.QuestionId,
                Question:this.Question};
    this.service.addQuestion(val).subscribe(res=>{
      this.toaster.success(res.toString());
    })
  }
  updateQuestion()
  {
    var val =  {QuestionId:this.QuestionId,
                Question:this.Question};
    this.service.updateQuestion(val).subscribe(res=>{
      this.toaster.success(res.toString());
       
      window.location.reload();
    })
  }
}
