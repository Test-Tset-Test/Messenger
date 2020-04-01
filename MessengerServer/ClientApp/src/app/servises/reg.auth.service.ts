import {Injectable} from '@angular/core';
import {UserApiServerice} from '../api/user.api.serverice';
import {UserModal} from '../models/user.modal';
import {HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegAuthApiService} from '../api/reg.auth.service';
import {take} from 'rxjs/operators';

@Injectable()
export class RegAuthService {
  public userService: UserModal;

  constructor(
    private authApiService: RegAuthApiService,
  ) {
  }

  regAuth = (data): Observable<any> => {
    const dataUser = {
      Mail: data.mail.value,
      Password: data.password.value
    };
    return this.authApiService.regAuth(dataUser);
  }
}
