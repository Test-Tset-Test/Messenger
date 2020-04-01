import {BaseApiService} from './base.api.service';
import {HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class RegAuthApiService {

  constructor(
    private baseApiService: BaseApiService,
  ) {
  }

  regAuth = (data): Observable<any> => {
    return this.baseApiService.post('/users/login', data);
  }
}
