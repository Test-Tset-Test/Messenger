import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './pages/login/login.module';
import {MainComponent} from './pages/main/main.component';
import {MainModule} from './pages/main/main.module';
import {ChatPageComponent} from './pages/chat/chat-page.component';
import {UserApiServerice} from './api/user.api.serverice';
import {AuthGuard} from './api/AuthGuard';
import {LoginComponent} from './pages/login/login.component';
import {RegAuthService} from './servises/reg.auth.service';
import {ChatListModule} from './Messenger/chat-list/chat-list.module';
import {ChatPageModule} from './pages/chat/chat-page.module';
import {BaseApiService} from './api/base.api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChatService} from './servises/chat.service';
import {RegAuthApiService} from './api/reg.auth.service';
import {ChatApiService} from './api/ChatApiService';

const clientRoute: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {path: 'chat-page', component: ChatPageComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: MainComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: ''},
  ]
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(clientRoute),
    MainModule,
    LoginModule,
    ChatPageModule,
    HttpClientModule,
  ],
  providers: [UserApiServerice, RegAuthService, BaseApiService, ChatService, RegAuthApiService, ChatApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
