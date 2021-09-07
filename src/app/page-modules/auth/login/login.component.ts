import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {LUserData} from "../../../../models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
  email: this.fb.control('', [Validators.required, Validators.email]),
  password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
});

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async loginUser() {
    if (this.loginForm.invalid) {
      // TODO: show message
      return;
    }

    const userData: LUserData = this.loginForm.getRawValue();
    console.log(userData);
    const data = await this.authService.login(userData);

    if (data.success) {
      await this.router.navigateByUrl('/home');
    } else {
      console.log(data.message);
    }
  }


}
