import { Component, OnInit } from '@angular/core';
import { MidwestData } from 'src/app/models/midwest-data';
import { NonMidwestData } from 'src/app/models/non-midwest-data';
import { FtgService } from 'src/app/services/ftg.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  area: string = 'Midwest';
  midwestDataArr: MidwestData[] = [];
  nonMidwestDataArr: NonMidwestData[] = [];
  ngOnInit(): void {}

  constructor(public ftgService: FtgService) {
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
    this.area = event.value;
    console.log(this.area);
  }

  regenerate() {
    if (this.area === 'Midwest') {
      console.log('midwest: ', this.midwestDataArr);
      this.ftgService.generateMidwestTags(this.midwestDataArr);
    } else {
      console.log('non midwest: ', this.nonMidwestDataArr);
      this.ftgService.generateNonMidwestTags(this.nonMidwestDataArr);
    }
  }
}
