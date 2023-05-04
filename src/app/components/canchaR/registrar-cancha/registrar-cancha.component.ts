import { Component,  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registrar-cancha',
  templateUrl: './registrar-cancha.component.html',
  styleUrls: ['./registrar-cancha.component.css']
})
export class RegistrarCanchaComponent {



  @ViewChild('btnAgregarImagen') btnAgregarImagen!: ElementRef<HTMLButtonElement>;
  @ViewChild('inputAgregarImagen') inputAgregarImagen!: ElementRef<HTMLInputElement>;
  @ViewChild('previsualizacionImagenes') previsualizacionImagenes!: ElementRef<HTMLButtonElement>;

  constructor() {

  }

  ngOnInit() {
    const btnAgregarImagen = this.btnAgregarImagen.nativeElement as HTMLButtonElement;
    btnAgregarImagen.addEventListener('click', () => {
      this.inputAgregarImagen.nativeElement.click();
    });
    const inputAgregarImagen = this.inputAgregarImagen.nativeElement as HTMLInputElement;
    inputAgregarImagen.addEventListener('change', () => {
      console.log('cambio');
      this.mostrarPrevisualizacion(inputAgregarImagen);
    });
    const previsualizacionImagenes = this.previsualizacionImagenes.nativeElement as HTMLButtonElement;
    previsualizacionImagenes.addEventListener('click', () => {
      this.inputAgregarImagen.nativeElement.click();
    });
  }





  mostrarPrevisualizacion(input: HTMLInputElement) {
    const btnAgregarImagen = this.btnAgregarImagen.nativeElement as HTMLButtonElement;
    if (input.files!.length === 0) {
      btnAgregarImagen.classList.remove('fotosCargadas');
    } else {
      btnAgregarImagen.classList.add('fotosCargadas');
    }
  }

  onBtnAgregarImagenClick() {
    this.inputAgregarImagen.nativeElement.click();
  }

  onInputAgregarImagenChange() {
    const previsualizacionImagenes = this.previsualizacionImagenes.nativeElement;
    previsualizacionImagenes.innerHTML = '';
    const files = this.inputAgregarImagen.nativeElement.files;
    for (let i = 0; i < files!.length; i++) {
      const file = files![i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent: any) => {
        const content = readerEvent.target.result;
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('imagenContainer');

        const img = document.createElement('img');
        img.src = content;
        imgContainer.appendChild(img);

        const eliminarImagen = document.createElement('button');
        eliminarImagen.classList.add('eliminarImagen');
        eliminarImagen.innerHTML = 'x';
        eliminarImagen.addEventListener('click', () => {
          imgContainer.remove();
          if (previsualizacionImagenes.querySelectorAll('.imagenContainer').length === 0) {
            this.btnAgregarImagen.nativeElement.classList.remove('fotosCargadas');
          }
        });
        imgContainer.appendChild(eliminarImagen);

        previsualizacionImagenes.appendChild(imgContainer);
      };
    }
    this.mostrarPrevisualizacion(this.inputAgregarImagen.nativeElement);
  }
}
