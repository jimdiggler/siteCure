import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { HomeComponent } from './home/home.component';
import { FlatContactComponent } from './flat-contact/flat-contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'flats/home', component: HomeComponent},
  {path: 'flats/contact', component: FlatContactComponent},
  {path: 'flats/:id', component: FlatDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
