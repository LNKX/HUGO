import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelvin-energy-glazing-details-form',
  templateUrl: './kelvin-energy-glazing-details-form.component.html',
  styleUrls: ['./kelvin-energy-glazing-details-form.component.css']
})
export class KelvinEnergyGlazingDetailsFormComponent implements OnInit {

	glazingManufacturer = [];

	storeyGlazingData = [{glazingRoom: [], glazingType: [], glazingHeight: [], glazingWidth: [], glazingProjection: [], glazingProjectionHeight:[], glazingAwningDevice: []}];

	addStorey(){
		this.storeyGlazingData.push({glazingRoom: [], glazingType: [], glazingHeight: [], glazingWidth: [], glazingProjection: [], glazingProjectionHeight:[], glazingAwningDevice: []});

	}

  constructor() { }

  ngOnInit() {
  }

}
