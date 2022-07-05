
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthHelperProfessor } from '../_helpers/auth-helper-professor';


@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css']
})
export class LoginProfessorComponent implements OnInit {

   //mensagem_sucesso: string = '';
   mensagem_erro: string = '';
   exibirPagina: boolean = false;

  constructor(private httpClient: HttpClient, private authHelper: AuthHelperProfessor ) { }

  formLogin = new FormGroup({
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });


  get form(): any {
    return this.formLogin.controls;
  }


  ngOnInit(): void {
    if (this.authHelper.isAutenticated()) {
    
      window.location.href = "/consultar-professor";
    } else {
      this.exibirPagina = true;
    }
  }

  onSubmit(): void {

    this.mensagem_erro = '';


    this.httpClient.post(environment.apiUrl + "/login/professor",
      this.formLogin.value,
      { responseType: 'text' }).
      subscribe(
        data => {

          localStorage.setItem('access_token', data);

          localStorage.setItem('login_professor', this.formLogin.value.login);
          this.formLogin.reset();

          window.location.href = "/consultar-professor";

        },
        e => {
          this.mensagem_erro = e.error;
          console.log(e.error);
        }
      );
  }





}
