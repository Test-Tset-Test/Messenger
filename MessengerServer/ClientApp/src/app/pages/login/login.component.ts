import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../servises/user.service';
import {RegAuthService} from '../../servises/reg.auth.service';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public mail: any;
  public password: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private serviceAuth: RegAuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      mail: new FormControl(this.mail),
      password: new FormControl(this.password),
    });
  }

  submit() {
    const data = this.formGroup.controls;
    this.serviceAuth.regAuth(data).pipe(take(1)).subscribe((response: any) => {
      console.log(response.id);
      localStorage.setItem('authUser', response.id);
      this.serviceAuth.userData = response;
    });
  }
}
