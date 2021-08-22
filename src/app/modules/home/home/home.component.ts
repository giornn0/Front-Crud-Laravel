import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/http/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logService: LoginService) { }

  ngOnInit(): void {
    this.logService.statusSession().subscribe()
  }

}
