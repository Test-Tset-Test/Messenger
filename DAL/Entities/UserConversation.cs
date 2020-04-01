﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class UserConversation
    {
       // public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ConversationId { get; set; }
        public Conversation Conversation { get; set; }
    }
}
