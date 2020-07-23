using DTO;
using System;
using System.Collections.Generic;

namespace Contracts.Service
{
    public interface IUserConversationService
    {
        List<ChatListDto> GetListChat(int userId);
        List<MessagesDto> getAllMessages(int userIdSend, int conversationId);
        bool addMessage(int userIdSend, int conversationId, string message);
    }
}
