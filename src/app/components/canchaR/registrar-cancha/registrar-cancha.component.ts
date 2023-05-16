import { Component , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup , FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar-cancha',
  templateUrl: './registrar-cancha.component.html',
  styleUrls: ['./registrar-cancha.component.css']
})
export class RegistrarCanchaComponent {

  @Input() nombre: any = '';
  @Input() direccion: any = '';
  @Input() descripcion: any = '';
  @Input() tipoCancha: any = '';
  @Input() gradas: any = '';
  @Input() tiempoInicio: any = '';
  @Input() tiempoFin: any = '';
  @Input() imagenes: any = '';

  //private btnAgregarImagen: HTMLAnchorElement;
  private inputAgregarImagen: HTMLInputElement;
  public files : any = []
  public previsualization? : string;

  constructor(private sanitizer: DomSanitizer) {

    //this.btnAgregarImagen = document.getElementById('btnAgregarImagen') as HTMLButtonElement;
    //this.btnAgregarImagen = document.getElementById('btnAgregarImagen') as HTMLAnchorElement;
    this.inputAgregarImagen = document.getElementById('inputAgregarImagen') as HTMLInputElement;
  }

  FormularioRegistroCancha = new FormGroup({
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    tipoCancha: new FormControl('', Validators.required),
    gradas: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    horaFin: new FormControl('', Validators.required),
    imagenes: new FormControl('', Validators.required)
  });

  clicker():void{
    console.log("clicker");
    this.inputAgregarImagen = document.getElementById('inputAgregarImagen') as HTMLInputElement;
    this.inputAgregarImagen.click();
  }

  captureFile(event : any):any{
    console.log(event.target.files);
    const file = event.target.files[0];
    this.extraerBase64(file).then((imagen:any) =>{
      console.log(imagen);
      this.previsualization = imagen.base;

      this.files.push(imagen.base);
    })

    this.files.push(file);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      }
    } catch (e) {
      reject(e);
    }

  });

  submit(){
    this.nombre = this.FormularioRegistroCancha.get('nombre')?.value;
    this.direccion = this.FormularioRegistroCancha.get('direccion')?.value;
    this.descripcion = this.FormularioRegistroCancha.get('descripcion')?.value;
    this.tipoCancha = this.FormularioRegistroCancha.get('tipoCancha')?.value;
    this.gradas = this.FormularioRegistroCancha.get('gradas')?.value;
    this.tiempoInicio = this.FormularioRegistroCancha.get('horaInicio')?.value;
    this.tiempoFin = this.FormularioRegistroCancha.get('horaFin')?.value;
    this.imagenes = this.FormularioRegistroCancha.get('imagenes')?.value;

    console.log(this.nombre);
    console.log(this.FormularioRegistroCancha.get('nombre')?.value);
    console.log(this.direccion);
    console.log(this.FormularioRegistroCancha.get('direccion')?.value);
    console.log(this.descripcion);
    console.log(this.FormularioRegistroCancha.get('descripcion')?.value);
    console.log(this.tipoCancha);
    console.log(this.FormularioRegistroCancha.get('tipoCancha')?.value);
    console.log(this.gradas);
    console.log(this.FormularioRegistroCancha.get('gradas')?.value);
    console.log(this.tiempoInicio);
    console.log(this.FormularioRegistroCancha.get('horaInicio')?.value);
    console.log(this.tiempoFin);
    console.log(this.FormularioRegistroCancha.get('horaFin')?.value);
    console.log(this.imagenes);

  }
}

