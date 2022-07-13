import { Injectable } from '@angular/core';
import { Jurisdiction } from '../models/jurisdiction';
import { Location } from '../models/location';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class FtgService {

  locations: Location[] = [];
  types: Type[] = [];
  jurisdictions: Jurisdiction[] = [];
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
  }
  generateNonMidwestTags(data: any) {
    console.log('Going to go generate non midwest tags now');
  }
}
