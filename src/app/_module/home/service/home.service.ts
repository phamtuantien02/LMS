import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/service/api.service';
@Injectable({
  providedIn: 'root'
})
export class homeService {
  constructor(private http:HttpClient,
              private apiService: ApiService) { }

  getLogin(val:any):Observable<any[]>
  {
    return this.apiService.post('Student/login',val);
  }
}
