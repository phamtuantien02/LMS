import { Component, OnInit, Input } from '@angular/core';
import { testService } from '../service/managetest.service';
import { TestQuestionService } from '../service/managetestquestion.service';
@Component({
  selector: 'app-assignquestion',
  templateUrl: './assignquestion.component.html',
  styles: [
  ]
})
export class AssignquestionComponent implements OnInit {
  constructor(private service:testService, private questionService: TestQuestionService) { }
  @Input() test:any;

  testID:string = "";
  QuestionList:any=[];
  QuestionIds: any=[];

  ngOnInit(): void {
    console.log(this.test);
    
    this.testID = this.test.TestID;
    this.QuestionList = this.questionService.getTestQuestionList().subscribe(data=>{
      this.QuestionList = data;
    });
  }
  saveQuestionId(id:any){
    if(this.QuestionIds.includes(id)){
      const index = this.QuestionIds.indexOf(id, 0); 
      if (index > -1) {
        this.QuestionIds.splice(index, 1);
      }
    }
    else{
        this.QuestionIds.push(id);
    }
  }
  assignQuestion()
  {
    var val =  {TestId:this.testID,
                QuestionIds:this.QuestionIds};
    this.service.AssignQuestionToTest(val).subscribe(res=>{
      alert(res.toString());
    })
  }
}
