import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { DimensionsIndicateurComponent } from './dimensions-indicateur/dimensions-indicateur.component';
import { FooterComponent } from './footer/footer.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { OutilRechercheComponent } from './outil-recherche/outil-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    DimensionsIndicateurComponent,
    FooterComponent,
    RessourcesComponent,
    OutilRechercheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
