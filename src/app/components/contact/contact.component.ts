import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  formControls: {[key: string]: AbstractControl};

  namePattern = /[A-Z][a-z]*\s[A-Z][a-z]*/;

  formSubmited = false;

  nameFocus = false;
  emailFocus = false;
  phoneFocus = false;
  messageFocus = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      subject: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.required],
      nWhatsapp: false,
      message: [null, Validators.required]
    });

    this.formControls = this.form.controls;
  }

  submit() {

    this.formSubmited = true;

    // Verifica se os dados do cliente, endereço e CEP são todos válidos
    if (this.form.invalid) {
      return;
    }

    // this.appComponent.setLoading(true);

    // Verifica se é um novo cliente (newClient) ou atualização

    this.contactService.post(this.form.value);

    /*
    this.contactService.post(this.form.value).subscribe((data: Contact) => {
      alert('Mensagem enviada com sucesso!');
      // this.appComponent.setLoading(false);
    }, error => console.log(error));
    */
  }

}
