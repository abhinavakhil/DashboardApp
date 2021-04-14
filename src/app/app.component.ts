import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashboardApp';

  orderForm: FormGroup = new FormGroup({});

  searchedValue: any;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this._fb.group({
      orderNumber: ['',Validators.required]
    })
  }

  getorderNumber(){
    console.log(this.orderForm.value);
    this.searchedValue = this.orderForm.value;
    console.log(this.searchedValue);
  }
}
