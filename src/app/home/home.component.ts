import { Component, OnInit } from '@angular/core';
import { Flat } from '../beans/flat';
import { FlatsService } from '../services/flats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breakpoint: number;
  breakpoint2: number;

  flats: Flat[];

  constructor(private flatsService: FlatsService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth >= 400) ? 2 : 1;
    this.breakpoint2 = (window.innerWidth >= 400) ? 2 : 1;
    this.flats = this.flatsService.getFlats();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth >= 400) ? 2 : 1;
    this.breakpoint2 = (event.target.innerWidth >= 400) ? 2 : 1;
  }

}
