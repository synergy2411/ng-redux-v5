import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CompanyReducers } from './reducers/company.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effects/company.effects';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({companies : CompanyReducers}),
    EffectsModule.forRoot([CompanyEffects])
   ],
  providers: [ CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
