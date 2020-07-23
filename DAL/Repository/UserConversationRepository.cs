using Contracts.Repo;
using DAL.Entities;
using DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace DAL.Repository
{
    public class UserConversationRepository : IUserConversationRepository
    {
        private ApplicationContext _context = new ApplicationContext();

        public List<ChatListDto> GetListChat(int userId)
      {
            var result = _context.Conversations.
                Include(el => el.UserConversations)
                .ThenInclude(el => el.User).
                Where(el => el.UserConversations.Any(u => u.UserId != userId)).
                //Include(el=>el.Conversation).
                Select(el => new
                {
                    UserId = userId,
                    ChatId = el.Id,
                    Users = el.UserConversations.Select(c => c.User)
                }).ToList();

            return result.Select(el => new ChatListDto
            {
                UserId = el.UserId,
                ConversationId = el.ChatId,
                Users = el.Users.Where(el => el.Id != userId)
            }).ToList();
            //result.ForEach(el =>
            //{
            //    trs = _context.UserConversations.Where(innerEl => innerEl.ConversationId == el.ConversationId).ToList();
            //    //oi = trs;
            //});

            //trs.ForEach(el => {
            //    tr = _context.Users.Where(innerEl => innerEl.Id == el.UserId).ToList();
            //});

            //var y = tr;
            //var fesd = _context.Users.Where(el => el.Id == result.UserId);

            //return result.Select(el => new UserConversationDto
            //{
            //    UserId = el.UserId,
            //}).ToList();

            return result.Select(el => new ChatListDto
            {
                UserId = el.UserId,
                ConversationId = el.ChatId,
                Users = el.Users
            }).ToList();
        }

        public List<MessagesDto> getAllMessages(int userIdSend, int conversationId)
        {
            var result = _context.Messageses.Where(el => el.ConversationId == conversationId).
                ToList();
            var lol = result;

            return result.Select(el => new MessagesDto {
                userIdSend = userIdSend,
                userId = el.UserSend,
                conversationId = el.ConversationId,
                message = el.Messege
            }).ToList();
        }

        public bool addMessage(int userSend, int conversationId, string messege)
        {
            Messages user = new Messages()
            {
                UserSend = userSend,
                ConversationId = conversationId,
                Messege = messege
            };
            _context.Messageses.Add(user);
            _context.SaveChanges();
            return true;
        }
    }
}
