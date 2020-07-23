import {Injectable, OnInit} from '@angular/core';
import {UserApiServerice} from '../api/user.api.serverice';
import {Observable, Subject} from 'rxjs';
import {HttpEvent} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {UserModal} from '../models/user.modal';

@Injectable()
export class UserService implements OnInit {

  private _userInfo = new Subject();

  constructor(
    private userApiServerice: UserApiServerice,
  ) {
    this.getUserInfo(localStorage.getItem('authUser'));
    console.log(this._userInfo);
  }

  ngOnInit(): void {

  }

  private getUserInfo(id): any {
      this.userApiServerice.getUserInfo(id).pipe(take(1)).subscribe(response => {
        this._userInfo.next(response);
      });
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

  get getUserData(): Observable<any> {
    return this._userInfo;
  }
}
