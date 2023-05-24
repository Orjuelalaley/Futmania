import { Usuario } from './Usuario.model';
import { Cancha } from './Cancha.model';

export interface Reserva {
  id: number;
  usuarios: Usuario[];
  canchas: Cancha[];
  fechaInicio: string;
  fechaFin: string;
}
