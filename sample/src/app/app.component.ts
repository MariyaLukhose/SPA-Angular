import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multplication-demo';

  public num1: number;
  public num2: number;
  public result: number;
  constructor(){
    this.result = 0;
    this.num1=0; 
    this.num2=0;
  }
  Multiply(){
      this.result = this.num1 * this.num2;
  }

 
  ngOnInit(): void{

  }
}
