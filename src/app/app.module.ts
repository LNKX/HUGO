import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material';
import { AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { MainMenuToolbarComponent } from './main-menu-toolbar/main-menu-toolbar.component';
import { MainSideNavigationComponent } from './main-side-navigation/main-side-navigation.component';
import { KelvinEnergyComponent } from './kelvin-energy/kelvin-energy.component';
import { KelvinEnergySiteDetailsComponent } from './kelvin-energy/kelvin-energy-site-details/kelvin-energy-site-details.component';
import { KelvinEnergyFloorDetailsComponent } from './kelvin-energy/kelvin-energy-floor-details/kelvin-energy-floor-details.component';
import { KelvinEnergyWallDetailsComponent } from './kelvin-energy/kelvin-energy-wall-details/kelvin-energy-wall-details.component';
import { KelvinEnergyRoofAndCeilingDetailsComponent } from './kelvin-energy/kelvin-energy-roof-and-ceiling-details/kelvin-energy-roof-and-ceiling-details.component';
import { KelvinEnergyGlazingDetailsComponent } from './kelvin-energy/kelvin-energy-glazing-details/kelvin-energy-glazing-details.component';
import { KelvinEnergySiteDetailsFormComponent } from './kelvin-energy/kelvin-energy-site-details/kelvin-energy-site-details-form/kelvin-energy-site-details-form.component';
import { KelvinEnergyFloorDetailsFormComponent } from './kelvin-energy/kelvin-energy-floor-details/kelvin-energy-floor-details-form/kelvin-energy-floor-details-form.component';
import { KelvinEnergyRoofAndCeilingDetailsFormComponent } from './kelvin-energy/kelvin-energy-roof-and-ceiling-details/kelvin-energy-roof-and-ceiling-details-form/kelvin-energy-roof-and-ceiling-details-form.component';
import { KelvinEnergyWallDetailsFormComponent } from './kelvin-energy/kelvin-energy-wall-details/kelvin-energy-wall-details-form/kelvin-energy-wall-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuToolbarComponent,
    MainSideNavigationComponent,
    KelvinEnergyComponent,
    KelvinEnergySiteDetailsComponent,
    KelvinEnergyFloorDetailsComponent,
    KelvinEnergyWallDetailsComponent,
    KelvinEnergyRoofAndCeilingDetailsComponent,
    KelvinEnergyGlazingDetailsComponent,
    KelvinEnergySiteDetailsFormComponent,
    KelvinEnergyFloorDetailsFormComponent,
    KelvinEnergyRoofAndCeilingDetailsFormComponent,
    KelvinEnergyWallDetailsFormComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   	MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
