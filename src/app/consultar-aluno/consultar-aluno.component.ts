import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-aluno',
  templateUrl: './consultar-aluno.component.html',
  styleUrls: ['./consultar-aluno.component.css']
})
export class ConsultarAlunoComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  //atributos para armazenas os dados dos medicos
  aluno: any[] = [];


  //metodo de execuçao quando componente é aberto
 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/aluno').subscribe(
    (data) => { this.aluno = data as any[]; },
    (e) => { console.log(e);

    }
  )
}

//função para fazer a exclusão do medico na API
excluir(idAluno:number):void{

  if(window.confirm('Deseja realmente excluir o aluno selecionado?')){
    this.httpClient.delete(environment.apiUrl + "/aluno/" + idAluno,
    {responseType : 'text'})
    .subscribe(
      (data) =>{

        alert(data); //exibir mensagem em uma janela popup
        this.ngOnInit(); //recarregar a consulta de alunos

      },
      (e)=>{
        console.log(e);
      }
    )
  }

}



}
