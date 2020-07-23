using Contracts.Service;
using MessengerServer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PusherServer;
using System.Net;

namespace MessengerServer.Controllers
{
    [ApiController]
    [Route("Pusher")]
    public class ChatController: ControllerBase
    {
        private IChatConversationService _chatConversationService;
        private IUserConversationService _conversationService;

        public ChatController(IChatConversationService chatConversationService, IUserConversationService conversationService)
        {
            _chatConversationService = chatConversationService;
            _conversationService = conversationService;
        }

        [Route("openChat")]
        public IEnumerable<OpenChatVM> opneChat([FromBody] OpenChatVM openChat)
        {

            var data = openChat;
            _chatConversationService.getMessagesList(openChat.ConversationId);
            return null;
        }

        [HttpPost("auth")]
        public async Task<ActionResult> HelloWorld()
        {
            var options = new PusherOptions
            {
                Cluster = "eu",
                Encrypted = true
            };

            var pusher = new Pusher(
              "975390",
              "35935d17e4b0feaca33b",
              "157278f5b673fba840a3",
              options);

            //var result = await pusher.TriggerAsync(
            //  "my-channel",
            //  "my-event",
            //  new { message = "hello world" });

            return Ok();
        }

        [HttpPost("addMessage")]
        public async Task<ActionResult> AddMessage([FromBody] AddMessage message)
        {

            var sd = message;
              var yup = _conversationService.addMessage(message.userIdSend, message.conversationId, message.message);
            if(yup == true)
            {
                var options = new PusherOptions
                {
                    Cluster = "eu",
                    Encrypted = true
                };

                var pusher = new Pusher(
                  "975390",
                  "35935d17e4b0feaca33b",
                  "157278f5b673fba840a3",
                  options);

                await pusher.TriggerAsync(
                  message.messageChannel,
                  "my-chat-" + message.conversationId,
                  new { message = message.message, userIdSend = message.userIdSend, userId = message.userId,conversationId = message.conversationId });
                //              await pusher.TriggerAsync(
                //"my-channel",
                //"my-event",
                //new { message = message.message, userIdSend = message.userIdSend, conversationId = message.conversationId });
                return Ok();
            }
            return Ok();
        }
    }
}
