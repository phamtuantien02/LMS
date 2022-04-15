import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-slidebootstrap',
  templateUrl: './slidebootstrap.component.html',
  styleUrls: ['./slidebootstrap.component.css']
})
export class slidebootstrapComponent implements OnInit{
  angImages=["ang1","ang2","ang3","ang4","ang5","ang6","ang7","ang8"].map((n) => `assets/images/homeimages/${n}.png`);
  bootstrapImages=["bootstrap1","bootstrap2","bootstrap3"].map((n) => `assets/images/homeimages/${n}.png`);
  netcoreImages=["netcore1","netcore2","netcore3","netcore4","netcore5"].map((n) => `assets/images/homeimages/${n}.png`);
  sqlImages=["sql1","sql2","sql3","sql4"].map((n) => `assets/images/homeimages/${n}.png`);
  techimages=["tech1","tech2","tech3","tech4","tech5","tech6","tech7","tech8","tech9","tech10"].map((n) => `assets/images/homeimages/${n}.png`);
  types:any=5;
  
  constructor(private activateRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params =>{
      const t=params.get('id');
      this.types = t==null ? 3 : t;
   })
  }
}

