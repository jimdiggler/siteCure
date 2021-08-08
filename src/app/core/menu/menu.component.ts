import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatDetailComponent } from 'src/app/flat-detail/flat-detail.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------
  navLinks = [
    { label: 'Appartements', link: '/flats/home'},
    { label: 'Le Blue Bay', link: '/flats/0'}, //Add link of menu
    { label: 'Le Bel Air', link: '/flats/1'},
    { label: 'Le Rose Hill', link: '/flats/2'},
    { label: 'Le Floréal', link: '/flats/3'},
    { label: 'Le Grand Chalet', link: '/flats/4'},
    // { label: 'Le Chalet', link: ''},
    { label: 'Le Petit Chalet', link: '/flats/5'},
    { label: 'Contact', link: '/flats/contact'}
  ]
  activeLinkIndex: number = -1;

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private router: Router) { }

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------
  ngOnInit() {
    this.router.events.subscribe((res) => {
    this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));//Permet le fonctionnement animation menu
  });
  }
}
