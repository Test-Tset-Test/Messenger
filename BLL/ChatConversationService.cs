using Contracts.Repo;
using Contracts.Service;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public class ChatConversationService: IChatConversationService
    {
        private IChatConversationRepository _chatConversationRepository;

        public ChatConversationService(IChatConversationRepository chatConversationRepository)
        {
            _chatConversationRepository = chatConversationRepository;
        }

        public List<MessagesListDto> getMessagesList(int conversationId)
        {
            return _chatConversationRepository.getMessagesList(conversationId);
        }
    }
}
