import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;

    this.ingresos.forEach(ingre => {
      ingresoTotal += ingre.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal: number = 0;

    this.egresos.forEach(egre => {
      egresoTotal += egre.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getProsupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
