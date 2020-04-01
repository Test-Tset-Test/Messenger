import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../servises/user.service';
import {UserModal} from '../../models/user.modal';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ChatService} from '../../servises/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {
  @Input()
  listChats: Array<UserModal>;
  private destroy$ = new Subject<void>();
  public getChatId: string;

  constructor(
    private userService: UserService,
    private chatService: ChatService,
  ) {
  }

  UP(id: number) {

  }

  ngOnInit(): void {
    const id = localStorage.getItem('authUser');
    this.chatService.getChatList(id).pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
      this.listChats = response;
      console.log(response);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
