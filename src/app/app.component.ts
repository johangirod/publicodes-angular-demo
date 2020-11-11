import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  situation;
  form;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      'durée du déplacement': ''
    })
  }

  onSubmit(situation) {
    this.situation = situation;
  }
}
