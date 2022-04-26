import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;
  subject!: string;
  poi !: string;

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  openSnackBar(email: string) {
    this._snackBar.open('Message sent to ' + email, '', { duration: 4000 });
  }

  ngOnInit(): void {
    this.poi = history.state.data;
  }

  onSubmit(): void {
    if (!(this.name && this.message)) {
      alert('Fill in the spaces to submit!');
      return;
    }
    this.openSnackBar(this.email);
    console.log (this.name, this.email, this.message, this.subject, this.poi);
    this.router.navigate(['']);
  }
}
