import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../http/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;

  constructor(private logService: LoginService) {}

  ngOnInit(): void {
    this.logService.statusSession().subscribe(
      (res) => (this.show = true),
      (error) => (this.show = false)
    );
  }
}
