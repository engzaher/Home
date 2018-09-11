import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-copouns',
  templateUrl: './copouns.component.html',
  styleUrls: ['./copouns.component.css'],
  inputs:[`cartVal`]
})
export class CopounsComponent implements OnInit {
  cartVal: string;
  discount: number=Number.parseInt(this.cartVal);
  constructor() { }
  ngOnInit() {
  }
  calc(copoun) {
    if(Number.parseInt(this.cartVal) ==0) {
      this.discount =0;
    }
    else if (copoun === "123AB") {
      this.discount = Number.parseInt(this.cartVal)- Number.parseInt(this.cartVal)*0.5;
    }
    else if (copoun === "523CD") {
      this.discount = Number.parseInt(this.cartVal)- Number.parseInt(this.cartVal)*0.25;
    }
    else {
      this.discount = Number.parseInt(this.cartVal);
    }
  }
}
