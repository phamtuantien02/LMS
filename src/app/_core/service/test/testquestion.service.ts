import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class TestquestionService {
  constructor(private http : HttpClient, private apiservice : ApiService) { }

  getQuestionJson()
  {
    return this.http.get("assets/questions.json");
  }

  getAllQuestionsForTest(val:any)
  {
    return this.apiservice.post('Test/GetTestByTestID',val);
  }
}
