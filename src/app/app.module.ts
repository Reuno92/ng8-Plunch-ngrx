import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
const NGRX_MODULES = [
  StoreModule.forRoot({}),
  StoreDevtoolsModule.instrument({
    name: 'plunch',
    maxAge: 15
  }),
  EffectsModule.forRoot([])
];

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PlacesListComponent } from './places/components/places/places-list.component';
const THIRD_PARTY_MODULES = [
  NgbModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NGRX_MODULES,
    ...THIRD_PARTY_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
