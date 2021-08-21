import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ReUseDialogData {
  action: string;
  message: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  action = '';
  message = '';
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReUseDialogData
  ) {}

  ngOnInit(): void {
    this.action = this.data.action;
    this.message = this.data.message;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
