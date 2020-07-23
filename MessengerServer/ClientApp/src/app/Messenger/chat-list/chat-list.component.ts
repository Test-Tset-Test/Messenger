import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../servises/user.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ChatService} from '../../servises/chat.service';
import {ChatListModel} from '../../models/ChatList.model';
import {RegAuthService} from '../../servises/reg.auth.service';
import {ConversationService} from '../../servises/conversation.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {
  @Input()
  listChats: Array<ChatListModel>;
  private destroy$ = new Subject<void>();
  public getChatId: string;
  public isGroupAvatar: number;

  constructor(
    private userService: UserService,
    private serviceAuth: RegAuthService,
    private chatService: ChatService,
    private messageService: ConversationService,
  ) {
  }

  ngOnInit(): void {
    const id = localStorage.getItem('authUser');
    this.chatService.getChatList(id).pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
      this.listChats = response;
      console.log(this.listChats);
      this.messageService.subscribeToChannel(this.listChats, 'my-chat-');
    });
  }

  UP(conversationId: number, userId: number) {
    console.log(conversationId, userId);
    this.chatService.arrayUserForChat$.next({conversationId, userId});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
