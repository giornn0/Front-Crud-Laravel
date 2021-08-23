import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../http/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() side: EventEmitter<boolean> = new EventEmitter();
  constructor(private logService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  openSM() {
    this.side.emit(true);
  }
  dirAct(value: any) {
    console.log(value);
    this.side.emit(value);
  }

  logOut() {
    const id: any = sessionStorage.getItem('id');
    this.logService.logout(id).subscribe();
    this.logService.logged.next(false);
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
