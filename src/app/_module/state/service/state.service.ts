import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
readonly APIUrl = "http://localhost:60769/api"

  constructor(private http:HttpClient, private api : ApiService) { }

  getStateList():Observable<any[]>
  {
    return this.api.get('State');
  }
  addState(val:any)
  {
    return this.api.post('State',val);
  }
  updateState(val:any)
  {
    return this.api.put('State',val);
  }

  deleteState(val:any)
  {
    return this.api.delete('State/'+val);
  }

  getAllStateNames():Observable<any[]>
  {
    return this.api.get('GetAllStateNames');
  }
}
