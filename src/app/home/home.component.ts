import { OfertasService } from '../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { IOfertas } from '../services/Ofertas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  public ofertas?: IOfertas[];

  constructor(private OfertasService: OfertasService) {}

  ngOnInit(): void {
    this.OfertasService.getOfertas().subscribe((ofertas) => {
      this.ofertas = ofertas;
      console.log(ofertas);
    });
  }
}
