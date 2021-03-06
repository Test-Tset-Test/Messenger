import {BaseApiService} from './base.api.service';
import {HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ChatId} from '../models/user.modal';


@Injectable()
export class ChatApiService {

  constructor(
    private baseApiService: BaseApiService,
  ) {
  }

  getChat = (data): Observable<HttpEvent<any>> => {
    return this.baseApiService.post('/users/chat', data);
  }

  getChatList = (id): Observable<ChatId> => {
    return this.baseApiService.post('/conversations/chatList', id);
  }

  getAllMessage = (data): Observable<any> => {
    return this.baseApiService.post('/conversations/messages', data);
  }

  openChat = (dataChat): Observable<any> => {
    return this.baseApiService.post('/conversations/openChat', dataChat);
  }
}
