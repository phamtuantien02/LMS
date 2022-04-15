import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../service/student.service';
import { StudentModel } from '../model/student-model';
@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html'
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service:StudentService) { }
  @Input() student:StudentModel = new StudentModel();

  StudentId?:number = 0;
  FirstName?:string = "";
  LastName?:string = "";
  UserName?:string = "";
  PassWord?:string = "";
  Email?:string = "";
  isNew:boolean = false;
  
  ngOnInit(): void {
    console.log(this.student);
    this.StudentId = this.student.StudID;
    this.FirstName = this.student.FirstName;
    this.LastName = this.student.LastName;
    this.UserName = this.student.UserName;
    this.PassWord = this.student.PassWord;
    console.log(this.UserName, this.PassWord);
    this.Email = this.student.Email;
    if(this.StudentId == 0)
    {
      this.isNew =  true;
    }
  }

  addStudent()
  {
    var val =  {UserName:this.UserName,
                PassWord:this.PassWord,
                FirstName:this.FirstName,
                LastName:this.LastName,
                Email:this.Email};
    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateStudent()
  {
    var val =  {StudID:this.student.StudID,
          UserName:this.UserName,
        PassWord:this.PassWord,
        FirstName:this.FirstName,
        LastName:this.LastName,
        Email:this.Email};
    this.service.updateStudent(val).subscribe(res=>{
      alert(res.toString());
    })
  }
}
