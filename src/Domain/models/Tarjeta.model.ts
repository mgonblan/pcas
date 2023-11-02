import { Observable } from "rxjs";
import { Tarjeta } from "src/Model/Tarjeta";

export abstract class TarjetaRepository {
    abstract getTarjeta(): Observable<Tarjeta>;
    abstract saveTarjeta(tarjeta: Tarjeta): Observable<Tarjeta>;
    abstract deleteTarjeta(): Observable<Tarjeta>;
    abstract updateTarjeta(tarjeta: Tarjeta): Observable<Tarjeta>;
    abstract getTarjetas(): Observable<Tarjeta[]>;
    abstract getTarjetaById(id: number): Observable<Tarjeta>;
    abstract getTarjetasByUsuario(id: number): Observable<Tarjeta[]>;
    abstract getTarjetaByUsuario(id: number): Observable<Tarjeta>;
}
