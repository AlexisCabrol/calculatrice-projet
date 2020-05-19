import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoCalComponent } from './histo-cal/histo-cal.component';
import { OperationComponent } from './histo-cal/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoCalComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
