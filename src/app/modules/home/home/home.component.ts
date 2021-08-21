import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StaffService } from 'src/app/core/http/staff/staff.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor( private userService: UserService
  ) {}
  srImage: any = '';
  formData: FormData = new FormData();
  blob: Blob = new Blob();
  ngOnInit(): void {
    this.userService.getUserStatus().subscribe
  }
  
  upload(file: any) {
    this.formData = new FormData();
    const reader = new FileReader();
    reader.onload = (event: any) => {
      // this.srImage=event.target.result
      this.blob = new Blob(file.target.files, {
        type: file.target.files[0].type,
      });
      this.formData.append('file', this.blob);
      // const source = window.URL.createObjectURL(this.blob);
      // this.srImage = this.sanitizer.bypassSecurityTrustUrl(source);
    };
    reader.readAsArrayBuffer(file.target.files[0]);
  } 
}

//firs step is to read the image
/*
then create a blob, with the type of the file gived, then append it to a form formData so you could send the blob in http requests methods
in the last you need to use windows.URL.createObjectURL with the blob created, and then make sure to sanitized it with the domsanitizer
so the ima source will be = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectUrl(new Blob(file,{type:file.type}))) 

*/
