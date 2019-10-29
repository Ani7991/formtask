import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modele',
  templateUrl: './form-modele.component.html',
  styleUrls: ['./form-modele.component.css']
})
export class FormModeleComponent implements OnInit {

  constructor() { }
  username: FormControl;
  myform: FormGroup;
  password: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
   this.myform = new FormGroup({
          username: new FormControl('', Validators.required),
          password: new FormControl('', [
            Validators.minLength(6),
            Validators.maxLength(8),
            Validators.required
          ]),

    });
  }

   createForm() {
    this.myform = new FormGroup({
        username: this.username,
        password: this.password
      });
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
      this.myform.reset();
    }
  }
  }

