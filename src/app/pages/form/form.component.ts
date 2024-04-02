import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formSubmitted: boolean = false;
  alumnoForm!: FormGroup;

  constructor(private fb: FormBuilder){
  }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.alumnoForm = this.fb.group({
      nombre: ['',[ Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]]
    })
  
  }

  get apellido(){
    return this.alumnoForm.get('apellido');
  }

  get email(){
    return this.alumnoForm.get('email')
  }

  get nombre(){
    return this.alumnoForm.get('nombre');
  }

  guardar(){
    console.log(this.alumnoForm.value)
  }

}
