import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestQuestionService } from '../../service/managetestquestion.service';

@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
})
export class AddanswerComponent implements OnInit {
  constructor(private service:TestQuestionService,private toaster:ToastrService) { }
  @Input() QuestionParam:any;

  QuestionId:string = "";
  Question:string = "";
  AnswerText:string="";
  IsCorrect:boolean=false;
  
  ngOnInit(): void {
    console.log(this.QuestionParam);
    this.QuestionId = this.QuestionParam.TestQuestionId;
    this.Question = this.QuestionParam.Question;
  }
  addAnswer()
  {
    var val =  {QuestionId:this.QuestionId,
                AnswerText:this.AnswerText,
                IsCorrect: this.IsCorrect};
    this.service.addAnswer(val).subscribe(res=>{
      this.toaster.success(res.toString());
    })
  }
}
