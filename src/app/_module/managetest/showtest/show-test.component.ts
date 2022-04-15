import { Component, OnInit } from '@angular/core';
import { testService } from '../service/managetest.service';

@Component({
  selector: 'app-show-test',
  templateUrl: './show-test.component.html',
  styleUrls: ['./show-test.component.css']
})
export class ShowtestComponent implements OnInit {

  constructor(private service: testService) { }

  testList:any=[];

  ModalTitle:string = "";
  ActivateAddEdittestComp:boolean = false;
  ShowAssignQuestion:boolean =false;
  test:any;

  testIdFilter:string="";
  testNameFilter:string="";
  testListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshtestList();
  }
  assignQuestionClick(item:any)
  {
    this.test = item;
    this.ModalTitle = "Assign Questions";
    this.ActivateAddEdittestComp = false;
    this.ShowAssignQuestion = true;
  }
  editClick(item:any)
  {
    this.test = item;
    this.ModalTitle = "Edit Test";
    this.ActivateAddEdittestComp = true;
    this.ShowAssignQuestion = false;
  }
  addClick()
  {
    this.test={
      testID:"0",
      numQuest:"",
      testAttempts:"",
      passingScore:""
    }
    this.ModalTitle="Add test";
    this.ActivateAddEdittestComp = true;
  }

  closeClick()
  {
    this.ActivateAddEdittestComp = false;
    this.refreshtestList();
  }
  refreshtestList()
  {
    this.service.gettestList().subscribe(data=>{
      this.testList = data;
      this.testListWithoutFilter = data;
    })
  }
 

  deleteClick(item:any)
  {
    if(confirm('Are you sure?'))
    {
      this.service.deletetest(item.testID).subscribe(data=>{
        alert(data.toString());
        this.refreshtestList();
      })
    }
  }

  FilterFn()
  {
    var testIdFilter = this.testIdFilter;
    var testNameFilter = this.testNameFilter;

    this.testList = this.testListWithoutFilter.filter(function(el:any){
      return el.testID.toString().toLowerCase().includes(
        testIdFilter.toString().trim().toLowerCase()
      )&&
      el.testName.toString().toLowerCase().includes(
        testNameFilter.toString().trim().toLowerCase()
      )
    });
  }


  sortResult(prop:any,asc:any)
  {
    this.testList = this.testListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return(a[prop]>b[prop])? 1 :((a[prop]<b[prop])?-1:0);
      }else{
        return(b[prop]>a[prop])? 1 :((b[prop]<a[prop])?-1:0);
      }
    })
  }

}
