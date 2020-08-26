import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';


const routes: Routes = [
  {path: 'flat/:id', component: FlatDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
