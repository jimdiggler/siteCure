import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlatBookingComponent } from './flat-booking/flat-booking.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlatContactComponent } from './flat-contact/flat-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlatDetailComponent,
    FlatBookingComponent,
    HomeComponent,
    FlatContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
  entryComponents: [
    FlatBookingComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },// Format datePicker DD/MM/YYYY
    { provide: LocationStrategy, useClass: HashLocationStrategy}// for refresh browser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
