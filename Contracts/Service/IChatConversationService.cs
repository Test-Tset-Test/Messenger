using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts.Service
{
    public interface IChatConversationService
    {
        List<MessagesListDto> getMessagesList(int conversationId);
    }
}
