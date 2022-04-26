import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.authService
      .loginUser(this.username, this.password)
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['']);
        }
        else alert('Invalid email or password');
      });
  }
}
