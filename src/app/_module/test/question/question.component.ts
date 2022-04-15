import { Component, OnInit } from '@angular/core';
import { TestquestionService } from 'src/app/_core/service/test/testquestion.service';
import { interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeBgDirective } from 'src/app/_module/test/directives/change-bg.directive';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questionList : any = [];
  public currentQuestion : number = 0;
  public points : number =0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer :number =0;
  interval$ : any;
  progress : string = "0";
  isQuizCompleted : boolean = false;
  //percent=Math.round((this.correctAnswer/this.questionList.length) * 100);

  TestID: any;
  constructor(private questionService : TestquestionService, private route: ActivatedRoute,private routerService:Router) { }

  ngOnInit(): void {
    //this.getAllQuestions();
    this.startCounter();
    this.TestID = this.route.snapshot.paramMap.get("TestID")!;
    var val={
      TestID:this.TestID,
    };
    this.questionService.getAllQuestionsForTest(val).subscribe(data=>{
      this.questionList = data.questions;
    })
  }
  get TestPercent():number{
    //return (this.correctAnswer/this.questionList.length) * 100)
    return Math.round((this.correctAnswer/this.questionList.length) * 100);
  }
  getAllQuestions()
  {
    /*
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.questionList= res.questions;
    })*/
    var val={
      TestID:this.TestID
    };
    this.questionService.getAllQuestionsForTest(val).subscribe(data=>{
      this.questionList = data.questions;
    })
  }
  retakeTest(){
    this.resetQuiz();
    this.correctAnswer=0;
    this.inCorrectAnswer=0;
  }
  nextQuestion()
  {
    this.currentQuestion ++;
  }
  previousQuestion()
  {
    this.currentQuestion --; 
  }
  answer(currentQuestion:number,option:any)
  {
    if(currentQuestion === this.questionList.length)
    {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct)
    {
      this.points+=10;
      this.correctAnswer ++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    }
    else
    {
        setTimeout(()=>{
        this.currentQuestion++;
        this.inCorrectAnswer ++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
      
      this.points -=10;
    }
  }
  startCounter()
  {
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter ===0)
      {
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe()
    },6000000);
  }
  stopCounter()
  {
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter()
  {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion=0;
    this.progress ="0";
    this.isQuizCompleted=false;
  }
  getProgressPercent()
  {
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
}
