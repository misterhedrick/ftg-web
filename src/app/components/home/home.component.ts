import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {}

  constructor(public ftgService: FtgService) {}
  area: string = 'Midwest';
  selectedValue: string = '';
  selectedCar: string = '';

  areaChanged(event: any) {
    this.area = event.value;
    console.log(this.area);
  }

  generateTags() {
    this.ftgService.generateTags();
  }
}
