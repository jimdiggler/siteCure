import { Component, OnInit } from '@angular/core';
import { Flat } from '../beans/flat';
import { FlatsService } from '../services/flats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------

  flats: Flat[];

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private flatsService: FlatsService) { }

  ngOnInit(){
    this.loadFlats();
  }

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------

  /*
  * Load all flats
  */
  loadFlats() {
    this.flatsService.getFlats()
      .subscribe((response) => {
        this.flats = response;
        console.log("Connexion ok" + response);
      },
        (error) => {
          console.log("Erreur Http" + error);
        });
  }
}
