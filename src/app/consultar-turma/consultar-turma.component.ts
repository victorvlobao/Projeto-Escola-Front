import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-turma',
  templateUrl: './consultar-turma.component.html',
  styleUrls: ['./consultar-turma.component.css']
})
export class ConsultarTurmaComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }


  turma: any[] = [];



 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/turma').subscribe(
    (data) => { this.turma = data as any[]; },
    (e) => { console.log(e);

    }
  )
}


excluir(idTurma:number):void{

  if(window.confirm('Deseja realmente excluir a turma selecionado?')){
    this.httpClient.delete(environment.apiUrl + "/turma/" + idTurma,
    {responseType : 'text'})
    .subscribe(
      (data) =>{

        alert(data);
        this.ngOnInit();

      },
      (e)=>{
        console.log(e);
      }
    )
  }

}



}
