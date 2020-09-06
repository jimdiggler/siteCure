import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flat } from '../beans/flat';
import { FlatsService } from '../services/flats.service';
import { FlatBookingComponent } from '../flat-booking/flat-booking.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html',
  styleUrls: ['./flat-detail.component.scss']
})
export class FlatDetailComponent implements OnInit {

  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------
  flat: Flat;

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private route: ActivatedRoute, private flatsService: FlatsService,private dialog: MatDialog) { }

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------
  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      this.flatsService.getFlat(id)
      .subscribe((response) => {
        this.flat = response;
        console.log("Connexion Serveur ok" + response);
      },
      (error) => {
        console.log("Erreur Http" + error);
      });
    })
  }

  //Not in use for flat-booking component
  openDialog() {
    this.dialog.open(FlatBookingComponent, {
      height: '600px',
      width: '600px',
      data: { name: this.flat.name }
    });
  }
}
