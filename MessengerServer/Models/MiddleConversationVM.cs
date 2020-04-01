using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerServer.Models
{
    public class MiddleConversationVM
    {
        public int UserId { get; set; }
        public int ConversationId { get; set; }
        public int ChatId { get; set; }
        public Object Users { get; set; }


        public static MiddleConversationVM FromDto(ChatListDto chatListDto)
        {
            return new MiddleConversationVM
            {
                UserId = chatListDto.UserId,
                ConversationId = chatListDto.ConversationId,
                Users = chatListDto.Users,
            };
        }
    }
}
