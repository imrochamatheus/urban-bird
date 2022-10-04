import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public confirmarCompra(formulario: NgForm): void {
    console.log(formulario);
  }
}
