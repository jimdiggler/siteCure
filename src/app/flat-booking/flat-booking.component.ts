import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LodgerService } from '../services/lodger.service';

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
  //static readonly PDF_LOCAL = "http://localhost:3000/pdf/"
  static readonly PDF_LOCAL = "https://site-cure-server.herokuapp.com/pdf/"
  submitted: boolean = false; // Know if the form has been submit
  today = new Date();

  contactForm = this.fb.group({
    id: [null],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    lastName1: ['', Validators.required],
    firstName1: ['', Validators.required],
    phoneNumber1: ['', Validators.required],
    email1: ['', [Validators.required, Validators.email, Validators.pattern]],
    dateOfBirth1: ['', Validators.required],
    address1: ['', Validators.required],
    zipCode1: ['', Validators.required],
    location1: ['', Validators.required],
    lastName2: [''],
    firstName2: [''],
    phoneNumber2: [''],
    email2: [''],
    dateOfBirth2: [''],
    address2: [''],
    zipCode2: [''],
    location2: [''],
    flatId: [this.data.id, Validators.required]
  });

  

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private lodgerService: LodgerService, private router: Router, private dialogRef: MatDialogRef<FlatBookingComponent>) { }// Inject data from method openDialog()

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------
  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    // Possibilité: utiliser un EventEmitter avec la valeur du formulaire
    console.table(this.contactForm.value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      this.lodgerService.addLodger(this.contactForm.value).subscribe();
      this.router.navigate(['/']);
      setTimeout(() => { // Time for waiting the lodger have to be saved 
        this.loadPdf()
      }, 2000);
      this.dialogRef.close();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  /*
  * Open pdf / Inject Document / Necessary for open refresh browser
  */
  loadPdf(): void {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = FlatBookingComponent.PDF_LOCAL;
    link.click();
    link.remove();
  }
}
