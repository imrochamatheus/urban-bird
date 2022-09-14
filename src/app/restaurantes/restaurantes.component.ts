import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: 'restaurantes.component.html',
  styleUrls: ['restaurantes.component.css'],
  providers: [OfertasService],
})
export class RestaurantesComponent implements OnInit {
  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertas()
      .subscribe((ofertas) => console.log(ofertas));
  }
}
