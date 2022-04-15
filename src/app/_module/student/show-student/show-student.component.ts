import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { StudentModel } from '../model/student-model';
@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html'
})
export class ShowStudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  StudentList:any=[];

  ModalTitle:string = "";
  ActivateAddEditStudentComp:boolean = false;
  student:StudentModel = new StudentModel();
  ShowAssignCourse : boolean = false;
  
  ngOnInit(): void {
    this.refreshStudentList();
  }

  addClick()
  {
    this.student = new StudentModel(0);
    this.ModalTitle="Add Student";
    this.ActivateAddEditStudentComp = true;
  }

  closeClick()
  {
    this.ActivateAddEditStudentComp = false;
    this.refreshStudentList();
  }
  refreshStudentList()
  {
    this.service.getStudentList().subscribe(data=>{
      //console.log(data);
      this.StudentList = data;
    });
  }
  editClick(item:StudentModel)
  {
    
    this.student = item;
    console.log(this.student);
    this.ModalTitle = "Edit Student";
    this.ActivateAddEditStudentComp = true;
  }
  assignCourseClick(item:StudentModel)
  {
    this.student = item;
    this.ModalTitle = "Assign Course To: "+ item.FirstName +" "+ item.LastName;
    this.ActivateAddEditStudentComp = false;
    this.ShowAssignCourse = true;
    console.log(this.ShowAssignCourse);

  }

  deleteClick(item:StudentModel)
  {
    if(confirm('Are you sure?'))
    {
      this.service.deleteStudent(item.StudID).subscribe(data=>{
        alert(data.toString());
        this.refreshStudentList();
      })
    }
  }
}
