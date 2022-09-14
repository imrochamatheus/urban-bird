import { IOfertas } from './Ofertas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Observable<IOfertas[]> {
    return this.http.get<IOfertas[]>('http://localhost:3000/ofertas');
  }
}
