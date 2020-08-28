import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flat } from '../beans/flat';
import { FlatsService } from '../services/flats.service';
import { FlatBookingComponent } from '../flat-booking/flat-booking.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html',
  styleUrls: ['./flat-detail.component.scss']
})
export class FlatDetailComponent implements OnInit {

  flat: Flat;

  constructor(private route: ActivatedRoute, private flatsService: FlatsService,private dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      this.flat = this.flatsService.getFlat(id);
      console.log(this.flat);
    })
  }

  openDialog() {
    this.dialog.open(FlatBookingComponent, {
      height: '600px',
      width: '600px',
      data: { name: this.flat.name }
    });
  }
}
