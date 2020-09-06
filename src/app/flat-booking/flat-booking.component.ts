import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

  //----------------------------------------------------------------------------------------
  //COMPONENT FOR MODAL BOOKING NOT IN USE
  //----------------------------------------------------------------------------------------

@Component({
  selector: 'app-flat-booking',
  templateUrl: './flat-booking.component.html',
  styleUrls: ['./flat-booking.component.scss']
})
export class FlatBookingComponent implements OnInit {

  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------
  name: String;
  phone: String;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }// Inject data from method openDialog()

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------
  ngOnInit(): void {
  }

  sendForm(){
    console.log(this.name, this.phone, this.range.value);
  }
}
