import { Reserva } from './Reserva.model';

export interface Usuario {
  id: number;
  nombre: String;
  email: String;
  telefono: String;
  password: String;
  reservas: Reserva[];
}
