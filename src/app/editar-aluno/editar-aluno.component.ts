import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  //atributo
  mensagem: string = '';

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {

  const idAluno = this.activatedRoute.snapshot.paramMap.get('id') as string;


  this.httpClient.get(environment.apiUrl + "/aluno/" + idAluno).subscribe(

    (data:any) =>{

      this.formEdicao.patchValue(data);

    },
    (e) =>{
      console.log(e);
    }

  )

  }


    //montando a estrutura do formulário
    formEdicao = new FormGroup({
      //campos do formulário...seerão os mesmo campos
      //que temos na consulta....

      idAluno: new FormControl(''),
      nome: new FormControl('',[Validators.required]),
      endereco: new FormControl('',[Validators.required]),


    });


    get form():any{

      return this.formEdicao.controls;

    }



    //função para fazer a camada do edição na API
onSubmit():void{

  this.httpClient.put(environment.apiUrl + '/aluno', this.formEdicao.value,
  {responseType: 'text'})
  .subscribe(
    data => {
      this.mensagem = data;
    },
    e =>{

      this.mensagem = "Ocorreu um erro, a edição não foi realizada."
      console.log(e);

    }

  )

}



}
