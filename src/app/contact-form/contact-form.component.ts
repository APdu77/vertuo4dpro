import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      city: [''],
      zipCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(form:FormGroup): void {
    if (form.valid) {
      emailjs.send(
        'vertuo_service',
        'vertuo_template',
        form.value,
        'hSJjc4PLU1l62vsLy'
      ).then(() => {
        alert('Message envoyé avec succès !');
        form.reset();
      }, (error) => {
        alert('Erreur lors de l\'envoi : ' + JSON.stringify(error));
      });
    }
  }
}
