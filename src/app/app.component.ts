import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS';

  images = ["note1", "note2", "note3","note4","note5"].map((n) => `assets/images/homeimages/${n}.png`);

}
