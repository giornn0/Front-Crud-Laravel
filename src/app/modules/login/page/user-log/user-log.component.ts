import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../../../core/http/login/login.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StaffService } from 'src/app/core/http/staff/staff.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css'],
})
export class UserLogComponent implements OnInit {
  mail: string = '';

  constructor(
    private logService: LoginService,
    private fBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) {}

  user: FormGroup = this.fBuilder.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  tryLogin() {
    this.logService.login(this.user.value).subscribe((res) => {
      localStorage.setItem('token', res.logged.token);
      sessionStorage.setItem('role', res.logged.role);
      sessionStorage.setItem('id', res.logged.id)
      this.userService.userLogged();
      this.router.navigate(['']);
    });
  }
  invalid(field: string): boolean {
    return !!(
      this.user.controls[field]?.invalid && this.user.controls[field]?.touched
    );
  }
  restart() {
    const dialogRef = this.dialog.open(SetMail, {
      width: '250px',
      data: { mail: this.user.controls['user'].value },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.logService.restart(result).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }
  validControl(field: string): boolean {
    return !!(
      this.user.controls[field].invalid && this.user.controls[field].touched
    );
  }
}

export interface DialogData {
  mail: string;
}

@Component({
  selector: 'app-set-mail',
  templateUrl: './set-mail.component.html',
})
export class SetMail implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SetMail>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fBuilder: FormBuilder
  ) {}

  recovery: FormGroup = this.fBuilder.group({
    mail: this.fBuilder.control(this.data.mail, [
      Validators.required,
      Validators.email,
    ]),
  });

  ngOnInit(): void {
    this.recovery.controls['mail'].valueChanges.subscribe((mail) => {
      this.data.mail = mail;
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
