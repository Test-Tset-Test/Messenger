import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserService} from './user.service';
import {takeUntil} from 'rxjs/operators';
import {HttpEvent} from '@angular/common/http';
import {ChatApiService} from '../api/ChatApiService';
import {ChatId} from '../models/user.modal';

@Injectable()
export class ChatService implements OnDestroy {
  public arrayUserForChat$ = new Subject();
  private destroy$ = new Subject();

  constructor(
    private chatService: ChatApiService,
  ) {
  }

  getAllMessage = (data): Observable<any> => {
    return this.chatService.getAllMessage(data);
  }

  getChatList = (id): Observable<ChatId> => {
    const dataUser = {
      UserId: +id,
    };
    return this.chatService.getChatList(dataUser);
  }

  /*  openChat = (conversationId: number): Observable<any> => {
      const dataChat  = {
        ConversationId: conversationId,
      }
      return this.chatService.openChat(dataChat);
    }*/

  ngOnDestroy(): void {
    this.arrayUserForChat$.next();
    this.arrayUserForChat$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
