import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact_form: FormGroup;
  sent: boolean = false;

  constructor() {
    this.contact_form = new FormGroup({
      "email": new FormControl(null),
      "subject": new FormControl(null),
      "message": new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.setValidators();

    if (this.contact_form.valid) {
      this.sent = true;
    }
  }

  private setValidators() : void {
    this.contact_form.get('email').setValidators([Validators.required, Validators.email]);
    this.contact_form.get('email').updateValueAndValidity();

    this.contact_form.get('subject').setValidators([Validators.required, Validators.pattern('[A-z\\sa-z\?\.\,\-\_]{2,39}')]);
    this.contact_form.get('subject').updateValueAndValidity();

    this.contact_form.get('message').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(200)]);
    this.contact_form.get('message').updateValueAndValidity();
  }

}
