import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { StaffService } from '../../http/staff/staff.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { LoginService } from '../../http/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeIN', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @Output() toogleSideMenu: EventEmitter<boolean | null> = new EventEmitter();
  sideBar = false;
  header = false;
  userPict: SafeUrl = '';
  constructor(
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private router: Router,
    private staffService: StaffService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userService.getUserStatus().subscribe((res) => {
      if (res && !this.userPict) {
        const id: any = sessionStorage.getItem('id');
        this.staffService.getPicture(id).subscribe((res: any) => {
          const Uint = new Uint8Array(res.data.data);
          const blob = new Blob([Uint], { type: res.mimetype });
          const source = window.URL.createObjectURL(blob);
          this.userPict = this.sanitizer.bypassSecurityTrustUrl(source);
          this.header = true;
        });
      }
      if (!res) {
        this.header = false;
        this.userPict = '';
      }
    });
  }

  buttonClick(value?: boolean | null) {
    this.toogleSideMenu.emit(value);
  }
  logOut() {
    if (sessionStorage.getItem('id')) {
      console.log('loggin out in the be too');
      const id = parseInt(sessionStorage.getItem('id')!);
      this.loginService.logout(id).subscribe(() => {
        this.router.navigate(['/login']);
        this.userService.userLoggedOut();
      });
    } else {
      this.router.navigate(['/login']);
      this.userService.userLoggedOut();
    }
    localStorage.clear();
    sessionStorage.clear();
  }
}
