import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica?: string;

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const OfferId = this.route.parent?.snapshot.params['id'];

    this.ofertasService
      .getOndeFicaById(OfferId)
      .subscribe((infos) => (this.ondeFica = infos[0].descricao));
  }
}
