import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  //atributo
  mensagem: string = '';


  constructor(private httpCliente: HttpClient) { }


  ngOnInit(): void {

  }


  //estrutura do formulario
 formCadastro = new FormGroup ({
  //campos formulario
  nome: new FormControl('',[Validators.required]),
  endereco: new FormControl('',[Validators.required])

})


   //acessando o formulario/pagina HTML pegando dados tela
 get form():any{
  return this.formCadastro.controls;
}



  //fazer chamada de cadastro na API
onSubmit(): void{
  this.httpCliente.post(environment.apiUrl+'/aluno',
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
