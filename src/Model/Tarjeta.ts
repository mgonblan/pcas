export interface Tarjeta {
    id?: string;
    titular: string;
    numerotarjeta: string;
    cvv: string;
    fechacreacion?: Date;
    fechaexpiracion?: Date;
}
