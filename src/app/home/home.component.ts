import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  constructor(private OfertasService: OfertasService) {}

  ngOnInit(): void {
    console.log(this.OfertasService.gerOfertas());
  }
}
