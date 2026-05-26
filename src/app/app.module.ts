import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CakeDashboardComponent } from './shared/component/cake-dashboard/cake-dashboard.component';
import { CakeCardsComponent } from './shared/component/cake-cards/cake-cards.component';
import { CakeFormComponent } from './shared/component/cake-form/cake-form.component';
import { MatrialModule } from './shared/moduls/matrial/matrial.module';
import { FormsModule } from '@angular/forms';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';
import { PatientDashboardComponent } from './shared/component/patient-dashboard/patient-dashboard.component';
import { PatientFormComponent } from './shared/component/patient-form/patient-form.component';
import { PatientTableComponent } from './shared/component/patient-table/patient-table.component';
import { BikeDashboardComponent } from './shared/component/bike-dashboard/bike-dashboard.component';
import { BikeTableComponent } from './shared/component/bike-table/bike-table.component';
import { BikeFormComponent } from './shared/component/bike-form/bike-form.component';
import { BookDashboardComponent } from './shared/component/book-dashboard/book-dashboard.component';
import { BookFormComponent } from './shared/component/book-form/book-form.component';
import { BookTableComponent } from './shared/component/book-table/book-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeDashboardComponent,
    CakeCardsComponent,
    CakeFormComponent,
    GetConfirmationComponent,
    PatientDashboardComponent,
    PatientFormComponent,
    PatientTableComponent,
    BikeDashboardComponent,
    BikeTableComponent,
    BikeFormComponent,
    BookDashboardComponent,
    BookFormComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatrialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
