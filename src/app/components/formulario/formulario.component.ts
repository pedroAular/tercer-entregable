import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  myForm: FormGroup;

  
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'usuario': ['', Validators.required],
      'password': ['', Validators.minLength(8)]
    });
  }
}

