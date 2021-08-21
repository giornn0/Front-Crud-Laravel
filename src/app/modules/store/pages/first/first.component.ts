import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/http/store/store.service';
import { Store } from 'src/app/shared/models/store.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  stores: Store[] = [];
  page: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.page = res.page;
    });
    this.activatedRoute.data.subscribe((data) => {
      this.stores = data.store as Store[];
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stores, event.previousIndex, event.currentIndex);
  }

  delete(id: number) {
    this.storeService.destroy(id).subscribe((res) => {
      this.storeService.getIndex(this.page).subscribe((res) => {
        this.stores = res as Store[];
      });
    });
  }
}
