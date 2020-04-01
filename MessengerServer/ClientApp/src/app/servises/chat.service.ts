import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserService} from './user.service';
import {takeUntil} from 'rxjs/operators';
import {HttpEvent} from '@angular/common/http';
import {ChatApiService} from '../api/ChatApiService';
import {ChatId} from '../models/user.modal';

@Injectable()
export class ChatService implements OnDestroy {
  public arrayUserForChat: Array<string> = [];
  public arrayUserForChat$ = new Subject();
  public idArrayForChat$ = new Subject();
  private destroy$ = new Subject();
  constructor(
    private chatService: ChatApiService,
  ) {
  }

/*
  getChat = (id: number): Observable<HttpEvent<any>>  => {
    this.userService.getUserById(id).pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
      this.arrayUserForChat.push(response);
      this.arrayUserForChat$.next(this.arrayUserForChat);
    });
    return this.chatService.getChat();
  }
*/

  getChatList = (id): Observable<ChatId> => {
    console.log(id);
    const dataUser = {
      UserId: +id,
    };
    console.log(dataUser);
    return this.chatService.getChatList(dataUser);
  }


  ngOnDestroy(): void {
    this.arrayUserForChat$.next();
    this.arrayUserForChat$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
