import { Injectable } from '@angular/core';
import { Jurisdiction } from '../models/jurisdiction';
import { Location } from '../models/location';
import { MidwestData } from '../models/midwest-data';
import { NonMidwestData } from '../models/non-midwest-data';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class FtgService {
  area: string = 'Midwest';
  locations: Location[] = [];
  types: Type[] = [];
  jurisdictions: Jurisdiction[] = [];
  midwestTagDataArr: MidwestData[] = [];
  nonMidwestTagDataArr: NonMidwestData[] = [];
  constructor() { 
    this.getLocations();
    this.getTypes();
  }

  getLocations(): Location[] {
    this.locations = [
      {value: 'steak', viewValue: 'Steak'},
      {value: 'pizza', viewValue: 'Pizza'},
      {value: 'tacos', viewValue: 'Tacos'},
    ];
    return this.locations;
  }

  getTypes(): Type[] {
    this.types = [
      {value: 'volvo', viewValue: 'Volvo'},
      {value: 'saab', viewValue: 'Saab'},
      {value: 'mercedes', viewValue: 'Mercedes'},
    ];
    return this.types;
  }

  getJurisdictions(): Jurisdiction[] {
    this.jurisdictions = [
      {value: 'volvo', viewValue: 'Volvo'},
      {value: 'saab', viewValue: 'Saab'},
      {value: 'mercedes', viewValue: 'Mercedes'},
    ];
    return this.jurisdictions;
  }

  generateMidwestTags(data: any) {
    console.log('Going to go generate midwest tags now');
    this.midwestTagDataArr = [
      { location: '', type: '', number: 1 },
      { location: '', type: '', number: 2 },
      { location: '', type: '', number: 3 },
      { location: '', type: '', number: 4 },
      { location: '', type: '', number: 5 },
    ];
  }
  generateNonMidwestTags(data: any) {
    console.log('Going to go generate non midwest tags now');
    this.nonMidwestTagDataArr = [
      { jurisdiction: '', number: 1 },
      { jurisdiction: '', number: 2 },
      { jurisdiction: '', number: 3 },
      { jurisdiction: '', number: 4 },
      { jurisdiction: '', number: 5 },
      { jurisdiction: '', number: 6 }
    ];
  }
}
