using Contracts.Service;
using MessengerServer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerServer.Controllers
{
    [ApiController]
    [Route("Conversations")]
    public class UserConversationController : ControllerBase
    {
        private IUserConversationService _userConversationService;
        public UserConversationController(IUserConversationService userConversationService)
        {
            _userConversationService = userConversationService;
        }

        [HttpPost("chatList")]
        public IEnumerable<MiddleConversationVM> ChatList([FromBody]MiddleConversationVM data)
        {
            var us = this._userConversationService.GetListChat(data.UserId);
            var dt = us;
            // var dt2 = applicationContext.MiddleConversations.Where(element => element.ConversationId == );
            //return us.Select(el => MiddleConversationVM.FromDto(el));
            return us.Select(el => MiddleConversationVM.FromDto(el));
        }
    }
}
