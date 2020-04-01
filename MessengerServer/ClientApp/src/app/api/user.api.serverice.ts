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
    this.list = [
      {
        id: 1,
        firstName: 'NameOne',
        lastName: 'NameTwo',
        avatar: '/assets/avatar/avatarOne.jpg',
        mail: 'mail@mailOne.com',
        password: '1'
      },
      {
        id: 2,
        firstName: 'NameTwo',
        lastName: 'NameTwo',
        avatar: '/assets/avatar/avatarTwo.jpg',
        mail: 'mail@mailTwo.com',
        password: '12'
      },
      {
        id: 3,
        firstName: 'NameThree',
        lastName: 'NameThree',
        avatar: '/assets/avatar/avatarThree.jpg',
        mail: 'mail@mailThree.com',
        password: '123'
      }
    ];
  }

  getUserListApi = (): Observable<HttpEvent<any>> => {
    console.log('asdwas');
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

