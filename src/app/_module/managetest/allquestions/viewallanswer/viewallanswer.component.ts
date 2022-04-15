import { Component, OnInit, Input } from '@angular/core';
import { TestQuestionService } from '../../service/managetestquestion.service';

@Component({
  selector: 'app-viewallanswer',
  templateUrl: './viewallanswer.component.html',
  styles: [
  ]
})
export class ViewallanswerComponent implements OnInit {
  constructor(private service:TestQuestionService) { }
  @Input() Question:any;

  QuestionId:string = "";
  AnswerList:any=[];
  
  ngOnInit(): void {
    var val={QuestionId:this.Question.TestQuestionId,
             Question: ""};
    console.log(val);
    this.service.getTestAnswerList(val).subscribe(data=>{
      this.AnswerList=data;
    });
  }
  

}
