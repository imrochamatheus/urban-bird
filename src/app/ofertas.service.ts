import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {
  public ofertas = ['Oferta 1'];

  constructor() {}

  public gerOfertas(): Array<any> {
    return this.ofertas;
  }
}
