import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MidwestData } from 'src/app/models/midwest-data';
import { NonMidwestData } from 'src/app/models/non-midwest-data';
import { FtgService } from 'src/app/services/ftg.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  midwestDataArr: MidwestData[] = [];
  nonMidwestDataArr: NonMidwestData[] = [];
  ngOnInit(): void {}

  constructor(public ftgService: FtgService, private router: Router) {
    this.midwestDataArr = [
      { location: '', type: '', number: 0 },
      { location: '', type: '', number: 0 },
      { location: '', type: '', number: 0 },
      { location: '', type: '', number: 0 },
      { location: '', type: '', number: 0 },
    ];
    this.nonMidwestDataArr = [
      { jurisdiction: '', number: 0 },
      { jurisdiction: '', number: 0 },
    ];
  }

  areaChanged(event: any) {
    this.ftgService.area = event.value;
  }

  generateTags() {
    if (this.ftgService.area === 'Midwest') {
      console.log('midwest: ', this.midwestDataArr);
      this.ftgService.generateMidwestTags(this.midwestDataArr);
      this.router.navigate(['/tags']);
    } else {
      console.log('non midwest: ', this.nonMidwestDataArr);
      this.ftgService.generateNonMidwestTags(this.nonMidwestDataArr);
      this.router.navigate(['/tags']);
    }
  }
}
