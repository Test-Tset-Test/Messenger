import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {UserService} from '../../servises/user.service';
import {UserModal} from '../../models/user.modal';
import {Subject} from 'rxjs';
import {ChatService} from '../../servises/chat.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input()
  list: Array<UserModal>;
  @Output()
  test = new EventEmitter();
  testIdForChat: number;
  disabled: boolean;

  public arrayChat: Array<any>;
  private destroy$ = new Subject<UserModal>();
  public userListChat: Array<UserModal> = [];

  constructor(
    private userService: UserService,
    private chatService: ChatService,
  ) {
  }

  ngOnInit(
  ): void {
    this.chatService.arrayUserForChat$.pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
      this.userListChat = response;
      console.log(this.userListChat);
    });
  }

  @Input()
  addUserList() {
    this.userService.getUserById(1).pipe().subscribe((response: any) => {
      this.userListChat.push(response);
    });
  }

  getUserList() {
    this.list = this.userService.getUserList();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
