import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private mySchema:any;
  private myModel:any = {};
  private actions:any = {};

  constructor() {
    this.mySchema = require('./schema.json');
    this.actions['alert'] = (property, options) => {
      alert(JSON.stringify(property.value));
    };
  }



}
