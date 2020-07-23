import {UserModal} from './user.modal';

export interface ChatListModel {
  userId: number;
  conversationId: number;
  chatId: number;
  users: Array<UserModal>;
}
