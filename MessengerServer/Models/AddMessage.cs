using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerServer.Models
{
    public class AddMessage
    {
        public string message { get; set; }
        public int userIdSend { get; set; }
        public int userId { get; set; }
        public int conversationId { get; set; }
        public string messageChannel { get; set; }
    }
}
