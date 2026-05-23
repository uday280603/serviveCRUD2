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

@NgModule({
  declarations: [
    AppComponent,
    CakeDashboardComponent,
    CakeCardsComponent,
    CakeFormComponent,
    GetConfirmationComponent
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
