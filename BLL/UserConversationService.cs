using Contracts.Repo;
using Contracts.Service;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public class UserConversationService: IUserConversationService
    {
        private IUserConversationRepository _userConversationRepository;

        public UserConversationService(IUserConversationRepository userConversationRepository)
        {
            this._userConversationRepository = userConversationRepository;
        }

        public List<ChatListDto> GetListChat(int UserId)
        {
            var result = this._userConversationRepository.GetListChat(UserId);
            return result;
        }

        public List<MessagesDto> getAllMessages(int userIdSend, int conversationId)
        {
            var result = this._userConversationRepository.getAllMessages(userIdSend, conversationId);
            return result;
        }

        public bool addMessage (int userIdSend, int conversationId, string message)
        {
            var result = this._userConversationRepository.addMessage(userIdSend, conversationId, message);
            return result;
        }
    }
}
