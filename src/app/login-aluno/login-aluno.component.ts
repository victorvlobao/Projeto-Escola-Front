import { AuthHelperAluno } from './../_helpers/auth-helper-aluno';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css']
})
export class LoginAlunoComponent implements OnInit {

   //mensagem_sucesso: string = '';
   mensagem_erro: string = '';
   exibirPagina: boolean = false;

  constructor(private httpClient: HttpClient, private authHelper: AuthHelperAluno ) { }

  formLogin = new FormGroup({
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });


  get form(): any {
    return this.formLogin.controls;
  }


  ngOnInit(): void {
    if (this.authHelper.isAutenticated()) {
      // redirecionamento....
      window.location.href = "/consultar-aluno";
    } else {
      this.exibirPagina = true;
    }
  }

  onSubmit(): void {
    //this.mensagem_sucesso = '';
    this.mensagem_erro = '';


    this.httpClient.post(environment.apiUrl + "/login/aluno",
      this.formLogin.value,
      { responseType: 'text' }).
      subscribe(
        data => {
          //this.mensagem_sucesso = 'Autenticação realizada com sucesso';

          //salvar o TOKEN na LOCAL STORAGE
          localStorage.setItem('access_token', data);

          //salvar o login do usuário na LOCAL STORAGE
          localStorage.setItem('login_aluno', this.formLogin.value.login);
          this.formLogin.reset(); //limpara o formulário.
          //redirecionamento
          window.location.href = "/consultar-aluno";

        },
        e => {
          this.mensagem_erro = e.error;
          console.log(e.error);
        }
      );
  }





}
