import { Component, OnInit } from '@angular/core';
import { MidwestFormData } from 'src/app/models/midwest-form-data';
import { NonMidwestFormData } from 'src/app/models/non-midwest-form-data';
import { FtgService } from 'src/app/services/ftg.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  area: string = 'Midwest';
  midwestFormDataArr: MidwestFormData[] = [];
  nonMidwestFormDataArr: NonMidwestFormData[] = [];
  ngOnInit(): void {}

  constructor(public ftgService: FtgService) {
    this.midwestFormDataArr = [
      { location: '', type: '', devices: 0 },
      { location: '', type: '', devices: 0 },
      { location: '', type: '', devices: 0 },
      { location: '', type: '', devices: 0 },
      { location: '', type: '', devices: 0 },
    ];
    this.nonMidwestFormDataArr = [
      { jurisdiction: '', devices: 0 },
      { jurisdiction: '', devices: 0 },
    ];
  }

  selectedValue: string = '';
  selectedCar: string = '';

  areaChanged(event: any) {
    this.area = event.value;
    console.log(this.area);
  }

  generateTags() {
    if (this.area === 'Midwest') {
      console.log('midwest: ', this.midwestFormDataArr);
      this.ftgService.generateMidwestTags(this.midwestFormDataArr);
    } else {
      console.log('non midwest: ', this.nonMidwestFormDataArr);
      this.ftgService.generateNonMidwestTags(this.nonMidwestFormDataArr);
    }
  }
}
