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
    }
}
