import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.css'],
})
export class ButtonActionsComponent implements OnInit {
  @Input() section = '';
  @Input() id: number = 0;
  @Input() name = '';
  @Output() erase: EventEmitter<number> = new EventEmitter();

  editRoute = '';
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.editRoute = `/${this.section}/editar/${this.id.toString()}/`;
  }
  edit() {
    this.router.navigate([this.editRoute]);
  }
  delete() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data: {
        action: 'Delete',
        message: `Seguro que quiere eliminar ${this.name}?`,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'success') this.erase.emit(this.id);
    });
  }
}
