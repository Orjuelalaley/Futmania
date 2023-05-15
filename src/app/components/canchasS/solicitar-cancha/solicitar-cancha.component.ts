import { Component , Input } from '@angular/core';
import { FormGroup,  FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-solicitar-cancha',
  templateUrl: './solicitar-cancha.component.html',
  styleUrls: ['./solicitar-cancha.component.css']
})
export class SolicitarCanchaComponent {


  @Input() direccion: any = 'asd';
  @Input() tipoCancha: any = 'asd';
  @Input() gradas: any = 'asd';
  @Input() descripcion: any = 'asd';
  @Input() imagenes: any[] = [];

  @Input() dia: any = '';
  @Input() horaInicio: any = '';
  @Input() horaFin: any = '';
  @Input() comentario: any[] = [];

  cancha1 = './assets/images/canchas/1.jpg';
  cancha2 = './assets/images/canchas/2.jpg';
  cancha3 = './assets/images/canchas/3.jpg';
  cancha4 = './assets/images/canchas/4.jpg';
  perfil = './assets/images/canchas/prfl.png';

  constructor() {}
  solicitudCancha = new FormGroup({
    dia: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    horaFin: new FormControl('', Validators.required),
  });

  comentariosFrom = new FormGroup({
    comentario: new FormControl('', Validators.required),
  });

  comment(){
    this.comentario.push(this.comentariosFrom.get('comentario')?.value);
  }

  Submit(){
    this.dia = this.solicitudCancha.get('dia')?.value;
    this.horaInicio = this.solicitudCancha.get('horaInicio')?.value;
    this.horaFin = this.solicitudCancha.get('horaFin')?.value;

    console.log(this.dia);
    console.log(this.horaInicio);
    console.log(this.horaFin);
    console.log(this.comentario[0]);
  }

  borrarContenido(input: any) {
    input.value = '';
  }
}


