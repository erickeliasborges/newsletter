import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// shared
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensagemErro: String = '';

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) { }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    senha: new FormControl(),
  });

  ngOnInit() {
  }

  public login() {
    this.router.navigateByUrl('admin');
    return;

    // this._loginService.login(this.form.value).subscribe((resposta: any) => {
    //   this.auth.token = resposta.data.token;
    //   this.mensagemErro = '';
    //   this.router.navigateByUrl('admin');
    // }, error => {
    //   console.log(error);
    //   this.mensagemErro = 'Login ou senha inválidos';
    // });
  }

  public cadastrar(): void {
    this.router.navigateByUrl('cadastro');
  }

}
