import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelvin-energy-roof-and-ceiling-details-form',
  templateUrl: './kelvin-energy-roof-and-ceiling-details-form.component.html',
  styleUrls: ['./kelvin-energy-roof-and-ceiling-details-form.component.css']
})
export class KelvinEnergyRoofAndCeilingDetailsFormComponent implements OnInit {

	storeyRoofAndCeilingData = [{roofCladding:'', roofColour: '', roofInsulation:'', ceilingType: '', ceilingInsulation:''}];

	roofCladdingTypes = [
		{value: 'colorbond', viewValue: 'Colorbond'},
		{value: 'kliploc', viewValue: 'Kliploc'},
		{value: 'tiles', viewValue: 'Tiles'},
		{value: 'concreteSlab', viewValue: 'Concrete slab'},

	]; 

	roofInsulationTypes = [
		{value: 'none', viewValue: 'None'},
		{value: 'anticonBlanket', viewValue: 'Anticon blanket'},
		{value: 'sisalation', viewValue: 'Sisalation'},
		{value: 'sarkingGeneric', viewValue: 'Sarking (generic)'},
		{value: 'roofBlanket', viewValue: 'Roof blanket'}
	];

	roofColours = [
		{value: 'light', viewValue: 'Light'},
		{value: 'medium', viewValue: 'Medium'},
		{value: 'dark', viewValue: 'Dark'},
	];

	ceilingTypes =  [
		{value: 'horizontal', viewValue: 'Horizontal'},
		{value: 'raked', viewValue: 'Raked'},
		{value: 'cathedral', viewValue: 'Cathedral (15-45 degrees)'},
	];
	addRoofType(){

		this.storeyRoofAndCeilingData.push({roofCladding:'', roofColour: '', roofInsulation:'', ceilingType: '', ceilingInsulation:''});
	};

	deleteRoofType(index){
		this.storeyRoofAndCeilingData.splice(index,1);

	}

  constructor() { }

  ngOnInit() {
  }

}
