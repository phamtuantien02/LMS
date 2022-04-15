import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class testService {
readonly APIUrl = "http://localhost:60769/api"

  constructor(private http:HttpClient, private api : ApiService) { }
  AssignQuestionToTest(val:any):Observable<any[]>
  {
    return this.api.post('Test/AssignQuestion',val);
  }
  gettestList():Observable<any[]>
  {
    return this.api.get('Test');
  }
  addtest(val:any)
  {
    return this.api.post('Test',val);
  }
  updatetest(val:any)
  {
    return this.api.put('Test',val);
  }

  deletetest(val:any)
  {
    return this.api.delete('Test/'+val);
  }

  getAlltestNames():Observable<any[]>
  {
    return this.api.get('GetAlltestNames');
  }
}
