import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class TestQuestionService {
readonly APIUrl = "http://localhost:60769/api"

  constructor(private http:HttpClient, private api : ApiService) { }


  getTestAnswerList(val:any):Observable<any[]>
  {
    return this.api.post('TestQuestion/GetTestAnswers',val);
  }
  getTestQuestionList():Observable<any[]>
  {
    return this.api.get('TestQuestion');
  }
  addQuestion(val:any)
  {
    return this.api.post('TestQuestion',val);
  }
  addAnswer(val:any)
  {
    return this.api.post('TestQuestion/InsertAnser',val);
  }
  updateQuestion(val:any)
  {
    return this.api.put('TestQuestion',val);
  }

  deletetestquestion(val:any)
  {
    return this.api.delete('TestQuestion/'+val);
  }
}
