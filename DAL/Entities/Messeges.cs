using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Messages
    {
        public int Id { get; set; }
        public int UserSend { get; set; }
        public int ConversationId { get; set; }
        public string Messege { get; set; }
    }
}
