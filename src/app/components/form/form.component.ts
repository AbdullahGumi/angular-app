import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public b: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateBmi(prop: any){
    let weight: number = prop.form.controls.weight.value;
    let height: number = prop.form.controls.height.value;
    let bmi: number = weight / height;
    this.b = bmi
    //alert(`Your body mass index is ${bmi}`)
    
  }

}
