import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelvin-energy-wall-details-form',
  templateUrl: './kelvin-energy-wall-details-form.component.html',
  styleUrls: ['./kelvin-energy-wall-details-form.component.css']
})
export class KelvinEnergyWallDetailsFormComponent implements OnInit {

	wallTypes = [
	{value: 'brickVeneer', viewValue: 'Brick Veneer'},
	{value: 'hebelVeneer', viewValue: 'Hebel Veneer'},
	{value: 'brickCavity', viewValue: 'Brick Cavity'},
	{value: 'FRCWeatherboard', viewValue: 'FRC Weatherboard'},
	{value: 'colorbondClad', viewValue: 'Colorbond Clad'},
	{value: 'EPS50MM', viewValue: 'Expanded Polystyrene Foam (50mm)'},
	{value: 'EPS75MM', viewValue: 'Expanded Polystyrene Foam (75mm)'},
	{value: 'EPS75MM', viewValue: 'Expanded Polystyrene Foam (100mm)'},
	{value: 'concBlock190MM', viewValue: 'Concrete Block (190mm)'},
	]; 

  storeyWallData = [{wallType: '', reflectiveFoil: false}];

	wallTypesInput = [undefined];

	wallFoilInput = [undefined];

  	addWallType(){
  		this.wallTypesInput.push([]);
  		this.wallFoilInput.push(undefined);
  		console.log(this.wallTypesInput);
  		console.log(this.wallFoilInput);
  	}

  	deleteWallType(index){
  		this.wallTypesInput.splice(index,1);
  		this.wallFoilInput.splice(index,1);
  		console.log(this.wallTypesInput);
  	}

  constructor() { }

  ngOnInit() {
  }

}
