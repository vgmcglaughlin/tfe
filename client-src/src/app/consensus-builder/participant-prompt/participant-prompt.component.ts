import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'tfe-participant-prompt',
  templateUrl: './participant-prompt.component.html',
  styleUrls: ['./participant-prompt.component.scss']
})
export class ParticipantPromptComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ParticipantPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('dialog ngOnInit', this.data);
  }

  dismiss(): void {
    this.dialogRef.close();
  }
}
