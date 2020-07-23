using Contracts.Repo;
using Contracts.Service;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repository
{
    public class ChatConversationRepository: IChatConversationRepository
    {
        private ApplicationContext _context = new ApplicationContext();

        public List<MessagesListDto> getMessagesList(int conversationId) {

            var dt = _context.Messageses.Where(el => el.ConversationId == conversationId).ToList();
            return null;
        }
    }
}
