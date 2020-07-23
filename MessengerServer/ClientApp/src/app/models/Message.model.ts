import {UserModal} from './user.modal';

export interface MessageModel {
  text: string;
  user: string;
}

export interface AllMessages {
  userIdSend: number;
  userId: number;
  conversationId: number;
  message: string;
}
