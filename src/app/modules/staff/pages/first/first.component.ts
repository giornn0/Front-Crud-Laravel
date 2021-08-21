import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/shared/models/staff.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
import { StaffService } from 'src/app/core/http/staff/staff.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  staff: Staff[] = [];
  constructor(private activatedRoute: ActivatedRoute, private sanitizer:DomSanitizer, private staffService:StaffService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data)
      this.staff = data.staff.res as Staff[];
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.staff, event.previousIndex, event.currentIndex)
    console.log(this.staff);
  }
  showPicture(id:number){
    // this.staffService.getOne(id).subscribe(res=>{

    // })
    // const Uint = new Uint8Array(res.data.data)
    // const blob = new Blob ([Uint],{res.data})
    // console.log(blob)
    // const source = window.URL.createObjectURL(blob)
    // this.employeePicture = this.sanitizer.bypassSecurityTrustUrl(source)
    };
  }

