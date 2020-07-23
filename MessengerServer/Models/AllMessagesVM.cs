using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerServer.Models
{
    public class AllMessagesVM
    {
        public int userIdSend { get; set; }
        public int userId { get; set; }
        public int conversationId { get; set; }
        public string message { get; set; }

        public static AllMessagesVM FromDto(MessagesDto data)
        {
            return new AllMessagesVM
            {
                userIdSend = data.userIdSend,
                userId = data.userId,
                conversationId = data.conversationId,
                message = data.message
            };
        }
    }
}
