import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getAllActorsWithFilms() {
    throw new Error('Method not implemented.');
  }
  // API URL
  private apiUrl = environment.apiUrl

  // Reqest Header
  public httpOptions(): any {
    let token = this.getToken()
    return {
      headers : new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      })
    }
  }

  constructor(private httpClient: HttpClient) { }

  // Actor Endpoint
  getAllActor() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/actor`, this.httpOptions())
  }
  insertActor(data: any) {
    return this.httpClient.post<any>(`${this.apiUrl}/master/actor`, {form_data : data}, this.httpOptions())
  }

  updateActor(data: any) {
    return this.httpClient.put<any>(`${this.apiUrl}/master/actor/${data.actor_id}`, { form_data: data }, this.httpOptions());
  }

  softDelete(actor_id: number, data: any) {
    return this.httpClient.put<any>(`${this.apiUrl}/master/actor/${actor_id}`, { form_data: data }, this.httpOptions());
  }

  deleteActor(actorId: number) {
    return this.httpClient.delete<any>(`${this.apiUrl}/master/actor/${actorId}`, this.httpOptions());
  }

  // film endpoint
  getAllFilm() {
    return this.httpClient.get<any>(`${this.apiUrl}/master/film`, this.httpOptions())
  }
  insertFilm(data: any) {
    return this.httpClient.post<any>(`${this.apiUrl}/master/film`, {form_data : data}, this.httpOptions())
  }
  updateFilm(data: any) {
    return this.httpClient.put<any>(`${this.apiUrl}/master/film/${data.film_id}`, { form_data: data }, this.httpOptions());
  }
  deleteFilm(filmId: number) {
    return this.httpClient.delete<any>(`${this.apiUrl}/master/film/${filmId}`, this.httpOptions());
  }

  
    // city endpoint
    getAllCity() {
      return this.httpClient.get<any>(`${this.apiUrl}/master/city`, this.httpOptions())
    }
    insertCity(data: any) {
      return this.httpClient.post<any>(`${this.apiUrl}/master/city`, {form_data : data}, this.httpOptions())
    }

    //query
    getCountByRating(){
      return this.httpClient.get<any>(`${this.apiUrl}/master/query`, this.httpOptions())
    }

    getTopCustomer(){
      return this.httpClient.get<any>(`${this.apiUrl}/master/query`, this.httpOptions())
    }

    getAllActorWithFilms() {
      return this.httpClient.get<any[]>(`${this.apiUrl}/master/query1`, this.httpOptions());
    }
  

    //auth
    login(nik: string, password: string) {
      return this.httpClient.post<any>(`${this.apiUrl}/auth/login`, { nik: nik, password: password });
    }

    saveToken(token: string) {
      localStorage.setItem('token', token);
    }

    getToken() {
      return localStorage.getItem('token');
    }

    isLoggedIn() {
      return !!this.getToken();
    }

    logout() {
      localStorage.removeItem('token');
    }  
}