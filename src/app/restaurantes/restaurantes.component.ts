import { Component, OnInit } from '@angular/core';
import { IOfertas } from '../services/Ofertas';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: 'restaurantes.component.html',
  styleUrls: ['restaurantes.component.css'],
  providers: [OfertasService],
})
export class RestaurantesComponent implements OnInit {
  constructor(private ofertasService: OfertasService) {}

  public ofertas: IOfertas[] = [];

  ngOnInit(): void {
    this.ofertasService
      .getOfertasByCategory('restaurante')
      .subscribe((ofertas) => (this.ofertas = ofertas));
  }
}
