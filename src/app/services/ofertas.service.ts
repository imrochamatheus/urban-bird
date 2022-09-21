import { IOfertas } from './Ofertas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
  private baseUrl = '${this.baseUrl}';

  constructor(private http: HttpClient) {}

  public getOfertas(): Observable<IOfertas[]> {
    return this.http.get<IOfertas[]>('${this.baseUrl}');
  }

  public getOfertasByCategory(category: string): Observable<IOfertas[]> {
    return this.http.get<IOfertas[]>(`${this.baseUrl}?categoria=${category}`);
  }

  public getOfertasById(id: number): Observable<IOfertas> {
    return this.http.get<IOfertas>(`${this.baseUrl}?id=${id}`);
  }
}
