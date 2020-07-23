import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChatListComponent} from './chat-list.component';
import {UserService} from '../../servises/user.service';

@NgModule({
  declarations: [
    ChatListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    ChatListComponent
  ],
  providers: [
    UserService,
  ],
})
export class ChatListModule {
  constructor() {
  }
}
