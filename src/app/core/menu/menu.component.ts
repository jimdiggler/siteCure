import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatDetailComponent } from 'src/app/flat-detail/flat-detail.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks = [
    { label: 'Le Blue Bay', link: '/flat/0', index: 0 }, //Add link of menu
    { label: 'Le Bel Air', link: '/flat/1', index: 1 },
    { label: 'le Rose Hill', link: '/flat/2', index: 2},
    { label: 'le Floréal', link: '/flat/3', index: 3 },
  ]
  activeLinkIndex: number = -1;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));//Permet le fonctionnement animation menu
  });
  }

}
