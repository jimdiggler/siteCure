import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flat-booking',
  templateUrl: './flat-booking.component.html',
  styleUrls: ['./flat-booking.component.scss']
})
export class FlatBookingComponent implements OnInit {

  name: String;
  phone: String;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }// Inject data from method openDialog()

  ngOnInit(): void {

  }

  sendForm(){
    console.log(this.name, this.phone, this.range.value);
  }
}
