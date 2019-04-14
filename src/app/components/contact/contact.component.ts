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

  formSubmited = false;
  formProcessing = false;

  nameFocus = false;
  emailFocus = false;
  phoneFocus = false;
  messageFocus = false;

  formSuccess: boolean;
  formError: boolean;

  phoneMask;

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
      nWhatsapp: true,
      message: [null, Validators.required]
    });

    this.formControls = this.form.controls;
  }

  resetPhoneMask() {
    this.phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  checkPhoneNumber() {
    const phoneValue = this.formControls.phone.value.replace(/_/g, '').length;
    if (phoneValue === 14) {
      this.phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else if (phoneValue < 14) {
      this.form.value.phone = '';
      this.phoneMask = [''];
    }
    console.log(phoneValue);
  }

  writeMessageLineBreaks() {
    this.form.value.message = this.form.value.message.replace(/\n/g, '<br />');
  }

  submit() {

    this.formSubmited = true;

    if (this.form.invalid || this.formProcessing) {
      return;
    }

    this.formError = false;
    this.formProcessing = true;

    this.writeMessageLineBreaks();

    this.contactService.post(this.form.value).subscribe(
      () => {
        this.formSuccess = true;
      },
      error => {
        this.formError = true;
        this.formProcessing = false;
        document.querySelector('.form-error').scrollIntoView();
        console.error(error);
      }
    );
  }

}
