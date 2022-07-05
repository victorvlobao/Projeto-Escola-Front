
/** Fazendo um tratamento na página account para
 * exibir o seu conteudo se o usuário não estiver
 * autenticado */

import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AuthHelperAluno {
  // método para verificar se o usuário está autenticado

  isAutenticated(): boolean {
    return localStorage.getItem('login_aluno') != null && localStorage.getItem('access_token') != null;
  }
}
