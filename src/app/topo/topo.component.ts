import { IOfertas } from './../services/Ofertas';
import { Component, OnInit } from '@angular/core';
import * as rxjs from 'rxjs';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public subjectPesquisa = new rxjs.Subject<string>();
  public ofertas?: rxjs.Observable<IOfertas[]>;
  public ofertas2: IOfertas[] = [];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      rxjs.debounceTime(1000),
      rxjs.distinctUntilChanged(),
      rxjs.switchMap((termo: string) => {
        if (termo.trim()) {
          return this.ofertasService.getOfertasByText(termo);
        }

        return rxjs.of<IOfertas[]>([]);
      }),
      rxjs.catchError((err) => rxjs.of<IOfertas[]>([]))
    );
    this.ofertas.subscribe((ofertas) => (this.ofertas2 = ofertas));
  }

  public pesquisar(termoPesquisa: string): void {
    this.subjectPesquisa.next(termoPesquisa);
  }
}
