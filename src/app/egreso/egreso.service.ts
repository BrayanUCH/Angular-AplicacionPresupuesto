import { Egreso } from "./egreso.model";

export class EgresoServicio {
    egresos: Egreso[] = [
        new Egreso("renta", 200),
        new Egreso("ropa", 900)
    ];
    eliminar(egreso: Egreso) {
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}