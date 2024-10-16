// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://db:3000/api'; // Ajustez l'URL selon votre configuration

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/profile`);
  }

  getUserFormations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/formations`);
  }

  // Autres méthodes du service utilisateur...
}