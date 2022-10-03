import { IOfertas } from '../services/Ofertas';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  public oferta?: IOfertas;

  ngOnInit(): void {
    const offerId = this.route.params.subscribe((params: Params) => {
      this.ofertasService
        .getOfertasById(params['id'])
        .subscribe((oferta) => (this.oferta = oferta.shift()));
    });
  }
}
