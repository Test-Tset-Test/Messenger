import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../servises/chat.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  constructor(
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }
}
