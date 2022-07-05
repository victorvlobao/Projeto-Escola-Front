import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuthenticatedAluno: boolean = false;
  loginAluno: String | null = '';

  isAuthenticatedProfessor: boolean = false;
  loginProfessor: String | null = '';

  ngOnInit(): void {
    this.isAuthenticatedAluno = localStorage.getItem("access_token") != null && localStorage.getItem("login_aluno") != null;
    if (this.isAuthenticatedAluno) {
      this.loginAluno = localStorage.getItem("login_aluno");
    }

    this.isAuthenticatedProfessor = localStorage.getItem("access_token") != null && localStorage.getItem("login_professor") != null;
    if (this.isAuthenticatedProfessor) {
      this.loginProfessor = localStorage.getItem("login_professor");
    }
  }

  logout(): void {
    if (window.confirm('Deseja realmente  sair do sistema?')) {
      // apagar as informações gravadas na local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('login_aluno');
      //redirecionar para a pagina inicial do projeto (login)
      window.location.href = '/';
    }

    if (window.confirm('Deseja realmente  sair do sistema?')) {
      // apagar as informações gravadas na local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('login_professor');
      //redirecionar para a pagina inicial do projeto (login)
      window.location.href = '/';
    }
  }

  title = 'ProjetoEscola';
}
