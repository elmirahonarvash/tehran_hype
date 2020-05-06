import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(public auth: AuthService, private fb: FormBuilder) { }
  contactusForm: any;

  ngOnInit() {
    this.contactusForm = this.fb.group({
      fullName: "",
      emailAddress: "",
      number: "",
      message: ["", [Validators.required, Validators.maxLength(150)]],
    });
  }
}
