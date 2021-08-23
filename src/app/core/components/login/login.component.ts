import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../http/login/login.service';
import { Usuario } from '../../../shared/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mail: string = '';
  usuario: Usuario = {} as Usuario;
  constructor(
    private logService: LoginService,
    private fBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {}

  user: FormGroup = this.fBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  tryLogin() {
    this.logService.login(this.user.value).subscribe((res) => {
      localStorage.setItem('token', res.access_token);
      sessionStorage.setItem('id', res.id_user);
      this.logService.logged.next(true);
      this.router.navigate(['']);
    });
  }
  invalid(field: string): boolean {
    return !!(
      this.user.controls[field]?.invalid && this.user.controls[field]?.touched
    );
  }
  newUser() {
    const dialogRef = this.dialog.open(SetMail, {
      width: '250px',
      data: { mail: this.user.controls['email'].value },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.logService.createUser(result).subscribe(
          (res) => {
            this.logService.login(result).subscribe((res) => {
              localStorage.setItem('token', res.access_token);
              sessionStorage.setItem('id', res.id_user);
              this.logService.logged.next(true);
              this.router.navigate(['']);
            });
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
  email: string;
  nombre: string;
  password: string;
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

  nuevoUsuario: FormGroup = this.fBuilder.group({
    email: this.fBuilder.control(this.data.email, [
      Validators.required,
      Validators.email,
    ]),
    name: this.fBuilder.control('', [
      Validators.required,
      Validators.maxLength(55),
    ]),
    password: this.fBuilder.control('', [
      Validators.required,
      Validators.maxLength(55),
    ]),
  });

  ngOnInit(): void {
    this.nuevoUsuario.valueChanges.subscribe((form) => {
      this.data = form;
    });
  }
  isInvalid(field: string) {
    return !!(
      this.nuevoUsuario.controls[field].invalid &&
      this.nuevoUsuario.controls[field].touched
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
