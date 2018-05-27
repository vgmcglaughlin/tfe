import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ParticipantPromptComponent } from '../participant-prompt/participant-prompt.component';
import { DatasetService, Dataset } from '../../common';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

const NUM_PARTICIPANTS = 2;

@Component({
  selector: 'tfe-consensus-builder',
  templateUrl: './consensus-builder.component.html',
  styleUrls: ['./consensus-builder.component.scss']
})
export class ConsensusBuilderComponent implements OnInit {

  selectedDataset: Dataset | null = null;
  participantIndex = 0;
  itemIndex = 0;
  allSelectionsMade = false;
  // matches = [];
  roundIndex = 0;
  items = [];

  constructor(
    private dialog: MatDialog,
    private datasetService: DatasetService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.openDialog();
    this.datasetService.get(this.activatedRoute.snapshot.params.id).subscribe(dataset => {
      this.selectedDataset = dataset;
      this.reset();
    });
  }

  get matches() {
    return this.items.filter(item => {
      return item.selections.every(selection => selection === true);
    });
  }

  ngOnInit() {

  }

  reset() {
    this.participantIndex = 0;
    this.itemIndex = 0;
    this.allSelectionsMade = false;
    this.roundIndex = 0;

    this.items = this.selectedDataset.items.map(item => {
      return {
        data: item,
        selections: [],
      };
    });
  }

  continue() {
    this.participantIndex = 0;
    this.itemIndex = 0;
    this.allSelectionsMade = false;
    this.roundIndex++;
    this.items = [...this.matches];
  }

  canContinue() {
    return this.matches.length > 1;
  }

  makeSelection(item, value) {
    item.selections.push(value);
    this.itemIndex++;

    if (this.itemIndex >= this.items.length) {
      this.participantIndex++;
      this.itemIndex = 0;

      if (this.participantIndex >= NUM_PARTICIPANTS) {
        this.allSelectionsMade = true;
      } else {
        this.openDialog();
      }
    }
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(ParticipantPromptComponent, {
      width: '300px',
      closeOnNavigation: true,
      data: {
        participantIndex: this.participantIndex,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
