import { IOfertas } from './Ofertas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getOfertas(): Observable<IOfertas[]> {
    return this.http.get<IOfertas[]>(`${this.baseUrl}/ofertas`);
  }

  public getOfertasByCategory(category: string): Observable<IOfertas[]> {
    return this.http.get<IOfertas[]>(
      `${this.baseUrl}/ofertas?categoria=${category}`
    );
  }

  public getOfertasById(id: number): Observable<IOfertas[]> {
    return this.http.get<IOfertas[]>(`${this.baseUrl}/ofertas?id=${id}`);
  }

  public getComoUsarById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/como-usar?id=${id}`);
  }

  public getOndeFicaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/onde-fica?id=${id}`);
  }
}
