import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
