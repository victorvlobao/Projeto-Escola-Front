import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-turma',
  templateUrl: './cadastrar-turma.component.html',
  styleUrls: ['./cadastrar-turma.component.css']
})
export class CadastrarTurmaComponent implements OnInit {

  mensagem: string = '';

  constructor(private httpCliente: HttpClient) { }

  ngOnInit(): void {}

 formCadastro = new FormGroup ({

  ano: new FormControl('',[Validators.required]),
  semestre: new FormControl('',[Validators.required])

})

 get form():any{
  return this.formCadastro.controls;
}

onSubmit(): void{
  this.httpCliente.post(environment.apiUrl+'/turma',
  this.formCadastro.value,{responseType: 'text'}).subscribe(
    data =>{
      this.mensagem = data;
      this.formCadastro.reset();
    },
    e => {
      this.mensagem = "Cadastro não realizado";
      console.log(e);
    }
  )
}

}
