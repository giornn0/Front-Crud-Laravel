import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './core/services/loader/loader.service';

import { animate, style, transition, trigger } from '@angular/animations';
import { LoginService } from './core/http/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'StoreApp';
  sideBar = false;
  spinner = false;
  show = false;
  spinnerSubscription: Subscription = new Subscription();

  constructor(
    private loader: LoaderService,
    private logService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.spinnerSubscription = this.loader
      .getStatus()
      .subscribe((res) => (this.spinner = res));
    this.logService.getSessionStatus().subscribe((res) => {
      this.show = res;
    });
  }
  sideMenu(value?: boolean | null) {
    if (value === false) {
      this.sideBar = false;
      return;
    }
    this.sideBar = !this.sideBar;
  }
}
