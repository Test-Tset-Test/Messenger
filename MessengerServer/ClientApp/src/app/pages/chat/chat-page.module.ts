import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChatPageComponent} from './chat-page.component';
import {NgModule} from '@angular/core';
import {ChatListModule} from '../../Messenger/chat-list/chat-list.module';


@NgModule({
  declarations: [
    ChatPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChatListModule,
  ],
  exports: [
    ChatPageComponent
  ],
  providers: [
  ],
})
export class ChatPageModule {
  constructor() {
  }
}
