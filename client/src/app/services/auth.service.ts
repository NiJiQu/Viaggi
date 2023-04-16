import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
// import { USERS } from '../mocks/users.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'api/users';

  constructor(private http: HttpClient, private userService: UserService) { }

  login(email: string, password: string): Observable<any> {
    const user = {email: email, password: password};
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user)
  }

  // login(email: string, password: string): Observable<any> {
  //   const user = USERS.find(user => user.email === email && user.password === password);
  //   return of (user);
  // }

  saveStorage(res: any){
    const user = {
      nome: res.nome,
      email: res.email,
      password: res.password,
      role: res.role
    }

    this.userService.userRole.next(res.role);
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  isAdmin(): boolean {
    return JSON.parse(localStorage.getItem('user')).role === "admin";
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userService.userRole.next('');
  }
}
