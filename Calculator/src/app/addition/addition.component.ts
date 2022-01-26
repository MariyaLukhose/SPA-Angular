import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent  {
  public firstNumber: number;
  public secondNumber: number;
  public sum: number;
  constructor() {
    this.firstNumber =0;
    this.secondNumber = 0;
    this.sum = 0;
  }
  addition(){
  this.sum = this.firstNumber+this.secondNumber;
  }
  ngOnInit(): void{

  }
}
