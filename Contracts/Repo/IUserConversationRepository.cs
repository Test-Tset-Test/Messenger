using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts.Repo
{
    public interface IUserConversationRepository
    {
        List<ChatListDto> GetListChat(int userId);
        List<MessagesDto> getAllMessages(int userIdSend, int conversationId);
        bool addMessage(int userIdSend, int conversationId, string message);
    }
}
