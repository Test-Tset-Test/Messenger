import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChatComponent} from './chat.component';
import {PusherService} from '../../api/pusher.api.service';

@NgModule({
  declarations: [
    ChatComponent,
  ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
    ],
  exports: [
    ChatComponent
  ],
  providers: [
    PusherService
  ],
})
export class ChatModule {
  constructor() {
  }
}
