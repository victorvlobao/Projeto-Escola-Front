import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormGroup,Validators, RequiredValidator} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-professor',
  templateUrl: './account-professor.component.html',
  styleUrls: ['./account-professor.component.css']
})


export class AccountProfessorComponent implements OnInit {

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  // montando a estrutura do formulario
  formCadastro = new FormGroup({
  // campos do formulário
  nome: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),

  login: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(25)]),

  senha: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)])
})

  //acessando o formulário/campos na página HTML
  get form(): any{
  return this.formCadastro.controls;
}


onSubmit():void{
  this.mensagem_sucesso = '';
  this.mensagem_erro = '';
  this.httpClient.post(environment.apiUrl + "/account/professor",
         this.formCadastro.value,
         { responseType: 'text'}).
         subscribe(
           data => {
             this.mensagem_sucesso = data;
             this.formCadastro.reset();
           },
           e => {
             this.mensagem_erro = e.erro;
             console.log(e.error);
           }
         );

      }




}
