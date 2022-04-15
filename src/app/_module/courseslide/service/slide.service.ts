import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  constructor(private http:HttpClient , private api: ApiService) { }

  getSlideList():Observable<any[]>
  {
    return this.api.get('Slide');
  }
  addSlide(val:any)
  {
    return this.api.post('Slide',val);
  }
  updateSlide(val:any)
  {
    return this.api.put('Slide',val);
  }
  deleteSlide(val:any)
  {
    return this.api.delete('Slide/'+val);
  }
  getAllSlideNames():Observable<any[]>
  {
    return this.api.get('GetAllSlideNames');
  }
}
