import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  }

}
