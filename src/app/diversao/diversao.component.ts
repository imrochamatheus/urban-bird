import { OfertasService } from './../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { IOfertas } from '../services/Ofertas';

@Component({
  selector: 'app-diversao',
  templateUrl: 'diversao.component.html',
  styleUrls: ['diversao.component.css'],
  providers: [OfertasService],
})
export class DiversaoComponent implements OnInit {
  constructor(private ofertasService: OfertasService) {}

  public ofertas: IOfertas[] = [];

  ngOnInit(): void {
    this.ofertasService
      .getOfertasByCategory('diversao')
      .subscribe((ofertas) => (this.ofertas = ofertas));
  }
}
