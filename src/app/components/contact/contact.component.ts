import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  namePattern = /[A-Z].*\s[A-Z].*/;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      subject: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {

    // Verifica se os dados do cliente, endereço e CEP são todos válidos
    if (this.form.invalid) {
      return;
    }

    // this.appComponent.setLoading(true);

    // Verifica se é um novo cliente (newClient) ou atualização
    this.contactService.post(this.form.value).subscribe((data: Contact) => {
      alert('Mensagem enviada com sucesso!');
      // this.appComponent.setLoading(false);
    }, error => console.log(error));
  }

}
