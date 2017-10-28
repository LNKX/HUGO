import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kelvin-energy-glazing-details-form',
  templateUrl: './kelvin-energy-glazing-details-form.component.html',
  styleUrls: ['./kelvin-energy-glazing-details-form.component.css']
})
export class KelvinEnergyGlazingDetailsFormComponent implements OnInit {

	climateZone = 5; //placeholder
	airMovementValue = 1; //placeholder
	projectGlazingDetails = {glazingManufacturer: '', windowFrameType: ''};

	glazingManufacturers = [{value: 'generic', viewValue: 'Generic'},
							{value: 'AL', viewValue: 'A&L'},
							{value: 'stegbar', viewValue: 'Stegbar'},
							{value: 'dowell', viewValue: 'Dowell'},
							{value: 'gJames', viewValue: 'GJames'},
							{value: 'Rylock', viewValue: 'Wintec'},
							{value: 'southernStar', viewValue: 'Southern Star'}					
	];

	windowFrameTypes = [	{value: 'aluminium', viewValue: 'Aluminium'},
					   	{value: 'timber', viewValue: 'Timber'},
					   	{value: 'UPVC', viewValue: 'UPVC'},
					   	{value: 'fibreglass', viewValue: 'Fibreglass'},
						{value: 'composite', viewValue: 'Composite'},
						{value: 'thermallyBrokenAluminium', viewValue: 'Thermally Broken Aluminium'}
	];

	windowTypes = [	{value: 'awning', viewValue: 'Awning'},
					{value: 'slidingWindow', viewValue: 'Sliding window'},
					{value: 'fixedGlass', viewValue: 'Fixed glass'},
					{value: 'casement', viewValue: 'Casement'},
					{value: 'bifoldWindow', viewValue: 'Bi-fold Window'},
					{value: 'louvre', viewValue: 'Louvre'},
					{value: 'doubleHung', viewValue: 'Double Hung'},
					{value: 'slidingDoor', viewValue: 'Sliding Door'},
					{value: 'bifoldDoor', viewValue: 'Bi-fold Door'},
					{value: 'stackerDoor', viewValue: 'Stacker Door'},
					{value: 'frenchDoor', viewValue: 'French Door'},
					{value: 'hingedDoor', viewValue: 'Hinged Door'}
					];

	glazingTypes = [{value: 'singleGlazing', viewValue: 'Single glazing'},
					{value: 'singlelowEGlazing', viewValue: 'Single glazed Low-E'},
					{value: 'comfortPlusGlazing', viewValue: 'ComfortPlus'},
					{value: 'doubleGlazing', viewValue: 'Double glazing'},
					{value: 'singleTintedGlazing', viewValue: 'Single glazed tinted'}
					];	

	roomTypes = [{value: 'bedroom', viewValue: 'Bedroom'},
					{value: 'kitchenLivingMeals', viewValue: 'Kitchen / Living / Meals'},
					{value: 'wetArea', viewValue: 'Wet area'},
					{value: 'walkInRobe', viewValue: 'Walk in robe'},
					{value: 'garage', viewValue: 'Garage'},
					{value: 'pantry', viewValue: 'Pantry'},
					{value: 'entryStairs', viewValue: 'Entry / Stairs'},
					{value: 'other', viewValue: 'Other'}
					];	

	orientationTypes = [{value: 'bedroom', viewValue: 'NW'},
						{value: 'bedroom', viewValue: 'N'},
						{value: 'bedroom', viewValue: 'NE'},
						{value: 'bedroom', viewValue: 'E'},
						{value: 'bedroom', viewValue: 'SE'},
						{value: 'bedroom', viewValue: 'S'},
						{value: 'bedroom', viewValue: 'SW'},
						{value: 'bedroom', viewValue: 'W'}					
	];

	// *** put this into a json file to be retrieved when needed
	conductanceAndSHGCConstantsTable = [{direct: {standard:[1.650, 0.063], high: [1.650, 0.069]}, suspended: {standard:[1.485, 0.057], high: [1.485, 0.063]}},
										{direct: {standard:[18.387, 0.074], high: [18.387, 0.081]}, suspended: {standard:[16.548, 0.067], high: [16.548, 0.074]}},
										{direct: {standard:[14.641, 0.062], high: [14.641, 0.068]}, suspended: {standard:[13.177, 0.056], high: [13.177, 0.062]}},
										{direct: {standard:[7.929, 0.097], high: [7.292, 0.107]}, suspended: {standard:[7.135, 0.087], high: [7.136, 0.096]}},
										{direct: {standard:[13.464, 0.122], high: [13.464, 0.134]}, suspended: {standard:[12.118, 0.110], high: [12.118, 0.121]}},
										{direct: {standard:[6.418, 0.153], high: [6.418, 0.168]}, suspended: {standard:[5.776, 0.138], high: [5.776, 0.152]}},
										{direct: {standard:[5.486, 0.189], high: [5.486, 0.208]}, suspended: {standard:[4.937, 0.17], high: [4.937, 0.187]}},
										{direct: {standard:[3.987, 0.234], high: [3.987, 0.257]}, suspended: {standard:[3.588, 0.211], high: [3.588, 0.232]}}];

	calculateGlazingAllowances(storeyFloorData, conductanceAndSHGCConstantsTable, climateZone, airMovementValue){
		
		let local = [];

		for(let i = 0, totalStoreys = storeyFloorData.length; i<totalStoreys;i++){
			local.push({conductanceAllowance: 0,
						SHGCAllowance: 0,
						lowerValueSHGC: 0,
						upperValueSHGC: 0});
			let floorTypes = storeyFloorData[i].floorTypes[0], floorAreas =  storeyFloorData[i].floorAreas[0];

			if (floorTypes[0] == 'concreteSlab' || floorTypes[0] == 'wafflePod'){
				local[i].workinlowerValueSHGC = conductanceAndSHGCConstantsTable[climateZone].direct.standard[1];
				local[i].upperValueSHGC = conductanceAndSHGCConstantsTable[climateZone].direct.high[1];
					// minus 1 here normalises airMovementValue
				local[i].conductanceAllowance = (conductanceAndSHGCConstantsTable[climateZone].direct.standard[0])*storeyFloorData[i].floorAreas[0];
				local[i].SHGCAllowance = ((airMovementValue-1)*(local[i].localupperValueSHGC- local[i].lowerValueSHGC)+ local[i].lowerValueSHGC)*storeyFloorData[i].floorAreas[0];

			}else{

				local[i].lowerValueSHGC = conductanceAndSHGCConstantsTable[climateZone].suspended.standard[1];
				local[i].upperValueSHGC = conductanceAndSHGCConstantsTable[climateZone].suspended.high[1];
					// minus 1 here normalises airMovementValue
				local[i].conductanceAllowance = (conductanceAndSHGCConstantsTable[climateZone].suspended.standard[0])*storeyFloorData[i].floorAreas[0];
				local[i].SHGCAllowance = ((airMovementValue-1)*(local[i].upperValueSHGC- local[i].lowerValueSHGC)+ local[i].lowerValueSHGC)*storeyFloorData[i].floorAreas[0];

			}

		}
		return local;
	}


	debugFunction(){
		console.log(this.storeyGlazingData);

	}

	// TO DO
	calculateSummerExposureFactor(){


	}

	calculateWinterExposureFactor(){


	}
	
	calculateUValues(){

	}
	
	calculateSHGCValues(){

	}
	// TO DO
	calculateDTSGlazing(UValues, SHGCValues, winterShadingFactors){
		let glazingData = this.storeyGlazingData;
		let conductanceNumerator = 0;
		let conductanceDenominator = 0;
		for (let x = 0, numberOfWindows = this.storeyGlazingData[0].glazingIDs.length; x < numberOfWindows; x++){
			conductanceNumerator += glazingData[0].glazingWidths[x]*glazingData[0].glazingHeights[x]*UValues[x];
			conductanceDenominator += glazingData[0].glazingWidths[x]*glazingData[0].glazingHeights[x]*winterShadingFactors[x]*SHGCValues[x];
		}
		return conductanceNumerator/conductanceDenominator;
	}

	// if there is no catalogue reference for a particular window, we need to select the generic value 

	storeyGlazingData = [{glazingOrientations: [''], glazingIDs: [''], glazingRooms: [''], glazingTypes: [], glazingHeights: [], glazingWidths: [], glazingProjections: [], glazingProjectionHeights:[], glazingAwningDevices: []}];
	//if you add a field to storeyGlazingData, add it in deleteWindow and addWindow
	addStorey(){
		//we need to listen to events from 'floor details to operate this function correctly'
		this.storeyGlazingData.push({glazingOrientations: [''], glazingIDs: [''], glazingRooms: [''], glazingTypes: [], glazingHeights: [], glazingWidths: [], glazingProjections: [], glazingProjectionHeights:[], glazingAwningDevices: []});

	}

	addWindow(){
		//index of storeyGlazingData currently a placeholder for when we can get this component listening to events from the floor details component
		this.storeyGlazingData[0].glazingOrientations.push('');
		this.storeyGlazingData[0].glazingIDs.push('');
		this.storeyGlazingData[0].glazingRooms.push('');
		this.storeyGlazingData[0].glazingTypes.push('');
		this.storeyGlazingData[0].glazingHeights.push('');
		this.storeyGlazingData[0].glazingWidths.push('');
		this.storeyGlazingData[0].glazingProjections.push('');
		this.storeyGlazingData[0].glazingProjectionHeights.push('');
		this.storeyGlazingData[0].glazingAwningDevices.push('');
		//if you add a field to storeyGlazingData, add it here and in deleteWindow
	}

	deleteWindow(j){
		//will soon take input i for storey number
		this.storeyGlazingData[0].glazingOrientations.splice(j,1);
		this.storeyGlazingData[0].glazingIDs.splice(j,1);
		this.storeyGlazingData[0].glazingRooms.splice(j,1);
		this.storeyGlazingData[0].glazingTypes.splice(j,1);
		this.storeyGlazingData[0].glazingHeights.splice(j,1);
		this.storeyGlazingData[0].glazingWidths.splice(j,1);
		this.storeyGlazingData[0].glazingProjections.splice(j,1);
		this.storeyGlazingData[0].glazingProjectionHeights.splice(j,1);
		this.storeyGlazingData[0].glazingAwningDevices.splice(j,1);
		//if you add a field to storeyGlazingData, add it here and in addWindow
	}


  constructor() { }

  ngOnInit() {
  }

}
