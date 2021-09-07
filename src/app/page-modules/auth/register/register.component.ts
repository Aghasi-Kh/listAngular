import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {IUserData} from "../../../../models/auth.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userForm = this.fb.group({
    mfirstName: this.fb.control('', Validators.required),
    mlastName: this.fb.control('', Validators.required),
    memail: this.fb.control('', [Validators.required, Validators.email]),
    mpassword: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    mphoneNumber: this.fb.control('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async registerUser() {
    if (this.userForm.invalid) {
      // TODO: show message
      return;
    }

    const userData: IUserData = this.userForm.getRawValue();
    console.log(userData);
    const data = await this.authService.register(userData);

    if (data.success) {
      await this.router.navigateByUrl('/');
    } else {
      console.log(data.message);
    }
  }

}
