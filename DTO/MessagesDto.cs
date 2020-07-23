using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class MessagesDto
    {
        public int userIdSend { get; set; }
        public int userId { get; set; }
        public int conversationId { get; set; }
        public string message { get; set; }
    }
}
