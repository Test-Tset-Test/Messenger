import {Injectable} from '@angular/core';
import {UserModal} from '../models/user.modal';
import {element} from 'protractor';
import {Observable, Subject} from 'rxjs';
import {HttpEvent} from '@angular/common/http';
import {BaseApiService} from './base.api.service';

@Injectable()
export class UserApiServerice {
  private list: Array<UserModal>;
  constructor(
    private serviceBase: BaseApiService,
  ) {
  }

  getUserInfo(id): Observable<any> {
    return this.serviceBase.post<any>('/users/getUserById' + '/' + id);
  }

  getUserListApi = (): Observable<HttpEvent<any>> => {
    return this.serviceBase.get<any>('/users/userList');
  }

  getUserList() {
    return this.list;
  }
  getUserById = (id): Observable<HttpEvent<any>> => {
    return this.serviceBase.post<any>('/users/getUserById' + '/' + id);
  }

  getUserById2 = (id): Observable<any> => {

  const subject = new Observable( subscriber => {
    subscriber.next(this.list.filter(element => element.id === id));
  });
  return null;
  }
}

