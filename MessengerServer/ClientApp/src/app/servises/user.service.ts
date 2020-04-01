import {Injectable} from '@angular/core';
import {UserApiServerice} from '../api/user.api.serverice';
import {Observable} from 'rxjs';
import {HttpEvent} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private userApiServerice: UserApiServerice,
  ) {
  }
  getUserList2 = (): Observable<HttpEvent<any>> => {
    return this.userApiServerice.getUserListApi();
  }

  getUserList() {
    return this.userApiServerice.getUserList();
  }

  getUserById = (id): Observable<HttpEvent<any>> => {
    return this.userApiServerice.getUserById(id);
  }

  getUserById2 = (id): Observable<any> => {
    return this.userApiServerice.getUserById2(id);
  }
}
