import { Component, OnInit } from '@angular/core';
import { Dataset, DatasetService } from '../../common';

@Component({
  selector: 'tfe-dataset-selector',
  templateUrl: './dataset-selector.component.html',
  styleUrls: ['./dataset-selector.component.scss']
})
export class DatasetSelectorComponent implements OnInit {

  datasets: Dataset[] = [];

  constructor(
    private datasetService: DatasetService,
  ) { }

  ngOnInit() {
    this.datasetService.all().subscribe(datasets => this.datasets = datasets);
  }

}
