import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class FtgService {

  locations: Location[] = [];
  types: Type[] = [];
  constructor() { 
    this.getLocations();
    this.getTypes();
  }

  getLocations(): Location[] {
    this.locations = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
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

  generateTags() {
    console.log('Going to go generate tags now');
  }
}
