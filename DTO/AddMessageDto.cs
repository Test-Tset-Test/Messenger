using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class AddMessageDto
    {
        public int UserSend { get; set; }
        public int ConversationId { get; set; }
        public string Messege { get; set; }
    }
}
