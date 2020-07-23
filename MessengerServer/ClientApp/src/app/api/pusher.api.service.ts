import { Injectable } from '@angular/core';
import {BaseApiService} from './base.api.service';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable()
export class PusherService {

  constructor(
    private baseApiService: BaseApiService,
  ) {
  }

  send = (message): Observable<any> => {
    console.log(message);
    return this.baseApiService.post('/pusher/addMessage', message);
  }
}
