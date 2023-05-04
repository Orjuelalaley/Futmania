export class Aplicacion {
    constructor(
        public id: number,
        public nombre: string,
        public tipo : string,
        public gradas : boolean,
        public ubicacion: string,
        public descripcion: string,
        public precioHora : number,
    ) { }
}