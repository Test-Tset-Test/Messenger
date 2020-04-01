using DTO;
using System;
using System.Collections.Generic;

namespace Contracts.Service
{
    public interface IUserConversationService
    {
        List<ChatListDto> GetListChat(int userId);
    }
}
