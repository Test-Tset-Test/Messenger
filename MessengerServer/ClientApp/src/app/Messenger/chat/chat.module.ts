import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChatComponent} from './chat.component';

@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    ChatComponent
  ],
  providers: [
  ],
})
export class ChatModule {
  constructor() {
  }
}
