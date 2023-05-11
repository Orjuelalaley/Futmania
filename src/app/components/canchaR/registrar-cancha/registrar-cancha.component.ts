import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registrar-cancha',
  templateUrl: './registrar-cancha.component.html',
  styleUrls: ['./registrar-cancha.component.css']
})
export class RegistrarCanchaComponent {

  //private btnAgregarImagen: HTMLAnchorElement;
  private inputAgregarImagen: HTMLInputElement;
  private previsualizacionImagenes: HTMLDivElement;
  public files : any = []
  public previsualization? : string;

  constructor(private sanitizer: DomSanitizer) {
    //this.btnAgregarImagen = document.getElementById('btnAgregarImagen') as HTMLButtonElement;
    //this.btnAgregarImagen = document.getElementById('btnAgregarImagen') as HTMLAnchorElement;
    this.inputAgregarImagen = document.getElementById('inputAgregarImagen') as HTMLInputElement;
    this.previsualizacionImagenes = document.getElementById('previsualizacionImagenes') as HTMLDivElement;





  }
  private agregarImagenes(files: FileList) {
    this.previsualizacionImagenes.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const img = new Image();
        img.src = event.target.result;
        this.previsualizacionImagenes.appendChild(img);
      };
      reader.readAsDataURL(files[i]);
    }
  }

  clicker():void{
    console.log("clicker");
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
}

