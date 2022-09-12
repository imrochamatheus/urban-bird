import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
  public ofertas = ['Oferta 1'];

  constructor(private http: HttpClient) {}

  public getOfertas(): Observable<any> {
    return this.http.get('http://localhost:3000/ofertas');
  }
}
