import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {PusherService} from '../api/pusher.api.service';
import Pusher from 'pusher-js';
import {environment} from '../environment/environment';

export interface Message {
  text: string;
  user: string;
}

@Injectable()
export class ConversationService {
  messagesStream = new ReplaySubject<Message>(1);
  pusher: any;
  messagesChannel: any;
  constructor(
    private pusherService: PusherService
  ) {
    Pusher.logToConsole = true;
    this.initializePusher();
  }

  initializePusher(): void {
    console.log('GO');
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: 'eu',
      forceTLS: true
    });
    this.messagesChannel = this.pusher.subscribe('my-channel-chat');
  }

  send = (message): Observable<any> => {
    return this.pusherService.send(message);
  }

  subscribeToChannel(arr, nameChannel) {
    for (const element of arr) {
      this.messagesChannel.bind(nameChannel + element.conversationId, (message) => {
        this.emitNewMessage(message);
      });
    }
  }

  emitNewMessage(message) {
    this.messagesStream.next(message);
  }

}


/**
 this.initialize();
 initialize() {
    this.pusherService.messagesChannel.bind('my-channel', (message) => {
      this.emitNewMessage(message);
    });
  }
 * */
