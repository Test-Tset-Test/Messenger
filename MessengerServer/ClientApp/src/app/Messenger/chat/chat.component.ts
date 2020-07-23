import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {UserService} from '../../servises/user.service';
import {UserModal} from '../../models/user.modal';
import {Observable, Subject} from 'rxjs';
import {ChatService} from '../../servises/chat.service';
import {take, takeUntil} from 'rxjs/operators';
import {AllMessages, MessageModel} from '../../models/Message.model';
import {FormBuilder} from '@angular/forms';
import {ConversationService} from '../../servises/conversation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  userName: string;
  messageText: string;
  private userInfo: UserModal;

  @Output()
  test = new EventEmitter();
  private subj = new Subject();
  messages: Array<MessageModel>;
  messageList?: Array<AllMessages>;
  private destroy$ = new Subject<UserModal>();

  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private messageService: ConversationService,
  ) {
    this.messages = [];
    this.messageList = [];
  }

  ngOnInit(): void {
    this.userService.getUserData.pipe(take(1)).subscribe((response: UserModal) => {
      this.userInfo = response;
    });
this.chatService.arrayUserForChat$.pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
  this.chatService.getAllMessage(response).pipe(take(1)).subscribe((responses: any) => {
    this.messageList = responses;
    console.log(this.messageList);
  });
});
    this.messageService.messagesStream
      .subscribe(this.newMessageEventHandler.bind(this));
  }

  private newMessageEventHandler(event: AllMessages): void {
    event.userIdSend = this.userInfo.id;
    console.log(this.userInfo);
    this.messageList.push(event);
    console.log(this.messageList);
  }


  send(userIdSend, conversationId, text: string): void {
    const messageChannel = 'my-channel-chat';
    this.messageService.send({message: text, userIdSend: userIdSend, conversationId: conversationId, messageChannel: messageChannel, userId: this.userInfo.id}).pipe(take(1)).subscribe();
    this.messageText = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
