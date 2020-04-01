import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {ChatListModule} from '../../Messenger/chat-list/chat-list.module';
import {ChatModule} from '../../Messenger/chat/chat.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ChatModule,
    ChatListModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
  ],
})
export class MainModule {
  constructor() {
  }
}
