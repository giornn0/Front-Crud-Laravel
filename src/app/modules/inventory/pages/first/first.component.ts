import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/shared/models/inventory.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  inventories: Inventory[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.inventories = data.inventory.res as Inventory[];
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.inventories, event.previousIndex, event.currentIndex);
  }
}
