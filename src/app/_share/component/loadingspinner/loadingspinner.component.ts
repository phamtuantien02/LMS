import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from 'src/app/_core/service/loading-spinner.service';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrls: ['./loadingspinner.component.css']
})
export class LoadingspinnerComponent implements OnInit {

  constructor(public loading: LoadingSpinnerService) { }

  ngOnInit(): void {
  }

}
