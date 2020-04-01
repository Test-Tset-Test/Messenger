using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Conversation
    {
        public int Id { get; set; }
        public int DateCreate { get; set; }
        public ICollection<UserConversation> UserConversations { get; set; } = new List<UserConversation>();
    }
}
