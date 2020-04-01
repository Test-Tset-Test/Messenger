using Contracts;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DatabaseInitializer : IDatabaseInitalizer
    {
        private readonly ApplicationContext _context = new ApplicationContext();

        public DatabaseInitializer()
        {
        }

        public void DeleteDataBase()
        { 
            _context.Database.EnsureDeleted();
        }

        public void InitDataBase()
        {
            if (_context.Database.EnsureCreated())
            {
                _context.Users.Add(new User
                {
                    FirstName = "Liam",
                    LastName = "Imba",
                    Mail = "mail@mailLiam.com",
                    Password = "123",
                    Avatar = ""
                });
                _context.Users.Add(new User
                {
                    FirstName = "Noah",
                    LastName = "Imbas",
                    Mail = "mail@maiNoah.com",
                    Password = "123",
                    Avatar = ""
                });
                _context.Users.Add(new User
                {
                    FirstName = "William",
                    LastName = "Imbad",
                    Mail = "mail@mailWilliam.com",
                    Password = "123",
                    Avatar = ""
                });

                _context.Conversations.Add(new Conversation
                {
                    DateCreate = 0000213120
                });
                _context.Conversations.Add(new Conversation
                {
                    DateCreate = 0000213120
                });
                _context.Conversations.Add(new Conversation
                {
                    DateCreate = 0000213120
                });

                _context.SaveChanges();
                var users = _context.Users.ToArray();
                var conversations = _context.Conversations.ToArray();
                foreach (var user in users) {
                    foreach (var conversation in conversations)
                    {
                        _context.UserConversations.Add(new UserConversation
                        {
                            UserId = user.Id,
                            ConversationId = conversation.Id,
                        });
                    }
                }
                _context.SaveChanges();
                

                //UserConversations.Add(new UserConversation
                //{

                //});
                //UserConversations.Add(new UserConversation
                //{

                //});
                //UserConversations.Add(new UserConversation
                //{

                //});

                //Messageses.Add(new Messages
                //{
                //    UserId = 1,
                //    ConversationId = 1,
                //    Messege = "asdwa",
                //});
                //Messageses.Add(new Messages
                //{
                //    UserId = 1,
                //    ConversationId = 1,
                //    Messege = "asdwa",
                //});
                //Messageses.Add(new Messages
                //{
                //    UserId = 1,
                //    ConversationId = 1,
                //    Messege = "asdwa",
                //});

                _context.SaveChanges();
            }
        }
    }
}
