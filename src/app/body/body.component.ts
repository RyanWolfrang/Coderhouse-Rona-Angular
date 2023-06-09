import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public cargando = true;
  public Animales: Animal[] = [
    new Animal (1, "Lena", 3, "Descripción de prueba", "Negro", 3.400, "Prueba", false),
    new Animal (2, "Roger", 8, "Descripción de prueba 2", "Negro", 6.800, "Prueba2", true),
  ]

  mailsEnviados: any[] = [];

  contactoForm: FormGroup;

//Nombres
  nombreControl = new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        this.noMoonValidator(),
      ]
    );
  
//Mail
  emailControl = new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
      ]
    );

//Asunto
  asuntoControl = new FormControl(
    '',
    [
      Validators.required
    ]
    );

//Cuerpo
  cuerpoControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(10)
    ]
    );

  constructor(){
    this.contactoForm = new FormGroup({
      nombre: this.nombreControl,
      email: this.emailControl,
      asunto: this.asuntoControl,
      cuerpo: this.cuerpoControl,
    });
  }

  onSubmit(): void{
    if(this.contactoForm.valid) {
      this.mailsEnviados.push(this.contactoForm.value);
      this.contactoForm.reset();
    } else {
      this.contactoForm.markAllAsTouched();
    }
  }

  noMoonValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value?.toLowerCase().includes('moon')){
        return{
          noMoon: true
        }
      }

      return null;
    }
  }
}

// "mascotas": [{
//   "id": 1,
//   "nombre": "Lena",
//   "edad": 2,
//   "descripcion": "Lena es la hija de nuestra gata terapeuta (Lamentablemente fallecida) 'Annie'. Nació con el virus del VILEF y hasta ahora lo lleva controlando muy bien y subiendo de peso a paso agigantado. Al principio fue rechazada a comparación de los otros tres niños que tuvo Annie, pero la madre la aceptó de nuevo.",
//   "color": "Negro",
//   "peso": 3.400,
//   "imagen": "img/lena-gata-de-color-negro.jpeg"
// },
// {
//   "id": 2,
//   "nombre": "Roger",
//   "edad": 8,
//   "descripcion": "Roger es la hija de una gata siamesa (La cual no tuvo nombre) que siempre venía a parir a la casa. La gata estaba completamente debilitada y falleció días después, por lo que cuidamos a la camada pero nos quedamos con este hermoso gato negro que siempre capturaba nuestra vista.",
//   "color": "Negro",
//   "peso": 7.800,
//   "imagen": "img/roger-gato-de color-negro.jpeg"
// },
// {
//   "id": 3,
//   "nombre": "Killi",
//   "edad": 2,
//   "descripcion": "Killi es la hija de 'La Michi', la gata también nació con leucemia y fue rechazada a muy temprana edad, fue completa casualidad haberla encontrado y pudimos salvarla a tiempo. Actualmente está muy saludable y supo llevarse bien con los gatos de la casa.",
//   "color": "Tricolor",
//   "peso": 3.800,
//   "imagen": "img/killi-gata-multicolor.jpeg"
// },
// {
//   "id": 4,
//   "nombre": "Ganga",
//   "edad": 2,
//   "descripcion": "Ganga es el hermano de Killi, no se sabe si en su camada tuvo más gatos o ellos dos fueron los únicos. El gato era extremadamente salvaje y le costó un poco acostumbrarse al cariño humano, pero ahora se lleva bien con todos los gatos y se deja acariciar por la gente de la casa.",
//   "color": "Blanco y Negro",
//   "peso": 3.600,
//   "imagen": "img/ganga-gato-de-color-blanco-y-negro.png"
// }
