using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts.Repo
{
    public interface IUserConversationRepository
    {
        List<ChatListDto> GetListChat(int userId);
    }
}
