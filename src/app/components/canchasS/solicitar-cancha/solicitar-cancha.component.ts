import { Component , Input } from '@angular/core';
import { FormGroup,  FormControl, Validators} from '@angular/forms';
import { Cancha } from '../../models/Cancha.model';
import { CanchasService } from '../../../servicios/canchas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitar-cancha',
  templateUrl: './solicitar-cancha.component.html',
  styleUrls: ['./solicitar-cancha.component.css']
})
export class SolicitarCanchaComponent {

  @Input() id: any = '';
  @Input() nombre: any = '';
  @Input() direccion: any = '';
  @Input() tipoCancha: any = '';
  @Input() gradas: any = '';
  @Input() descripcion: any = '';
  @Input() imagenes: any = '';

  @Input() dia: any = '';
  @Input() horaInicio: any = '';
  @Input() horaFin: any = '';


  cancha: Cancha = {
    id: 0,
    nombre: '',
    descripcion: '',
    ubicacion: '',
    precioHora: '',
    imagenCancha: '',
    tipoCancha: '',
    gradas: 0,
  };


  constructor(private service:CanchasService, private route: ActivatedRoute) {}
  solicitudCancha = new FormGroup({
    dia: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    horaFin: new FormControl('', Validators.required),
  });

  ngOnInit(){
    this.ScrollTop();
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getById("http","8080", "api/v1/field", this.id).subscribe(data => {
      console.log(data);
      this.cancha = data;
      this.nombre = this.cancha.nombre;
      this.direccion = this.cancha.ubicacion;
      this.descripcion = this.cancha.descripcion;
      this.tipoCancha = this.cancha.tipoCancha;
      this.imagenes = this.cancha.imagenCancha;
      console.log(this.cancha.imagenCancha);
      if(this.cancha.gradas == 1){
        this.gradas = "Con Gradas";
      }else{
        this.gradas = "Sin Gradas";
      }
      console.log(this.cancha.ubicacion);
    });
  }

  comentariosFrom = new FormGroup({
    comentario: new FormControl('', Validators.required),
  });

  Submit(){
    this.dia = this.solicitudCancha.get('dia')?.value;
    this.horaInicio = this.solicitudCancha.get('horaInicio')?.value;
    this.horaFin = this.solicitudCancha.get('horaFin')?.value;

    console.log(this.dia);
    console.log(this.horaInicio);
    console.log(this.horaFin);
    console.log(this.cancha.nombre);
  }

  ScrollTop(){
    window.scrollTo(0,0);
  }
}


