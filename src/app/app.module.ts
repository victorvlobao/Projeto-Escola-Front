
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { ConsultarAlunoComponent } from './consultar-aluno/consultar-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './_interceptors/tokenInterceptor';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { AccountAlunoComponent } from './account-aluno/account-aluno.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { ConsultarProfessorComponent } from './consultar-professor/consultar-professor.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { AccountProfessorComponent } from './account-professor/account-professor.component';
import { LoginProfessorComponent } from './login-professor/login-professor.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { ConsultarCursoComponent } from './consultar-curso/consultar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { CadastrarTurmaComponent } from './cadastrar-turma/cadastrar-turma.component';
import { ConsultarTurmaComponent } from './consultar-turma/consultar-turma.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';


const routes: Routes = [
  {path: 'cadastrar-aluno', component: CadastrarAlunoComponent},
  {path: 'consultar-aluno', component: ConsultarAlunoComponent},
  {path: 'editar-aluno/:id', component: EditarAlunoComponent},
  {path: 'account-aluno', component: AccountAlunoComponent},
  {path: 'login-aluno', component:LoginAlunoComponent},

  {path: 'cadastrar-professor', component: CadastrarProfessorComponent},
  {path: 'consultar-professor', component: ConsultarProfessorComponent},
  {path: 'editar-professor/:id', component: EditarProfessorComponent},
  {path: 'account-professor', component: AccountProfessorComponent},
  {path: 'login-professor', component:LoginProfessorComponent},

  {path: 'cadastrar-curso', component: CadastrarCursoComponent},
  {path: 'consultar-curso', component: ConsultarCursoComponent},
  {path: 'editar-curso/:id', component: EditarCursoComponent},

  {path: 'cadastrar-turma', component: CadastrarTurmaComponent},
  {path: 'consultar-turma', component: ConsultarTurmaComponent},
  {path: 'editar-turma/:id', component: EditarTurmaComponent},

  {path: 'editar-turma/:id', component: EditarTurmaComponent},

  {path: 'pagina-principal', component: PaginaPrincipalComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    CadastrarAlunoComponent,
    ConsultarAlunoComponent,
    EditarAlunoComponent,
    LoginAlunoComponent,
    AccountAlunoComponent,
    CadastrarProfessorComponent,
    ConsultarProfessorComponent,
    EditarProfessorComponent,
    AccountProfessorComponent,
    LoginProfessorComponent,
    CadastrarCursoComponent,
    ConsultarCursoComponent,
    EditarCursoComponent,
    CadastrarTurmaComponent,
    ConsultarTurmaComponent,
    EditarTurmaComponent,
    PaginaPrincipalComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
