import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 500),
        new Ingreso("venta de coche", 4000)
    ];
    eliminar(ingreso: Ingreso) {
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}