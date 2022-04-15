import { Component, OnInit } from '@angular/core';
import { TestQuestionService } from '../service/managetestquestion.service';
@Component({
  selector: 'app-allquestions',
  templateUrl: './allquestions.component.html',
  styles: [
  ]
})
export class AllquestionsComponent implements OnInit {

  constructor(private service: TestQuestionService) { }

  TestQuestionList:any=[];

  ModalTitle:string = "";
  ActivateAddEditTestQuestionComp:boolean = false;
  Question:any;
  ShowAddAnser:boolean =false;
  ShowExistingQuestion:boolean=false;

  QuestionIdFilter:string="";
  QuestionContentFilter:string="";
  QuestionListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshTestQuestionList();
  }

  addClick()
  {
    this.Question={
      TestQuestionId:"0",
      Question:""
    }
    this.ModalTitle="Add Test Question";
    this.ShowAddAnser=false;
    this.ActivateAddEditTestQuestionComp = true;
  }

  closeClick()
  {
    this.turnOffAllModal();
    this.refreshTestQuestionList();
  }
  refreshTestQuestionList()
  {
    this.service.getTestQuestionList().subscribe(data=>{
      this.TestQuestionList = data;
      this.QuestionListWithoutFilter = data;
    });
  }
  editClick(item:any)
  {
    console.log(item);
    this.Question = item;
    this.ModalTitle = "Edit Test Question";
    this.turnOffAllModal();
    this.ActivateAddEditTestQuestionComp = true;
  }
  addAnswerClick(item:any)
  {
    this.Question = item;
    this.ModalTitle = "Add Test Answer";
    this.turnOffAllModal();
    this.ShowAddAnser=true;
  }
  showAnserListClick(item:any){
    this.Question = item;
    this.ModalTitle = "Answers";
    this.turnOffAllModal();
    this.ShowExistingQuestion=true;
  }
  turnOffAllModal(){
    this.ActivateAddEditTestQuestionComp=false;
    this.ShowAddAnser=false;
    this.ShowExistingQuestion=false;
  }
  deleteClick(item:any)
  {
    if(confirm('Are you sure?'))
    {
      console.log(item);

      this.service.deletetestquestion(item.TestQuestionId).subscribe(data=>{
        alert(data.toString());
        this.refreshTestQuestionList();
      })
    }
  }

  FilterFn()
  {
    var QuestionIdFilter = this.QuestionIdFilter;
    var TestQuestionNameFilter = this.QuestionContentFilter;

    this.TestQuestionList = this.QuestionListWithoutFilter.filter(function(el:any){
      return el.TestQuestionID.toString().toLowerCase().includes(
        QuestionIdFilter.toString().trim().toLowerCase()
      )&&
      el.TestQuestionName.toString().toLowerCase().includes(
        TestQuestionNameFilter.toString().trim().toLowerCase()
      )
    });
  }


  sortResult(prop:any,asc:any)
  {
    this.TestQuestionList = this.QuestionListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return(a[prop]>b[prop])? 1 :((a[prop]<b[prop])?-1:0);
      }else{
        return(b[prop]>a[prop])? 1 :((b[prop]<a[prop])?-1:0);
      }
    })
  }


}
