import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: any;

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const OfferId = this.route.parent?.snapshot.params['id'];

    this.ofertasService
      .getComoUsarById(OfferId)
      .subscribe((infos) => (this.comoUsar = infos[0].descricao));
  }
}
