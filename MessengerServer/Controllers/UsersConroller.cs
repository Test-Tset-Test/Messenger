using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Contracts.Service;
using DAL;
using MessengerServer.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Logging;

namespace MessengerServer.Controllers
{
    [ApiController]
    [Route("Users")]
    public class UsersConroller : ControllerBase
    {
        private readonly ILogger<UsersConroller> _logger;
        IUserService _userService;
        ApplicationContext applicationContext = new ApplicationContext();
        //private IMapper _mapper;
        public UsersConroller(ILogger<UsersConroller> logger, IUserService userService)
        {
            _logger = logger;
            this._userService = userService;

        }

        //[HttpGet]
        //public IEnumerable<WeatherForecast> Get()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}

        /*[HttpGet("all")]
        public IEnumerable<WeatherForecast> GetUsers()  
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }*/

        
        [HttpGet("userList")]
        public IEnumerable<UserVM> GetUsers()
        {
            var users = this._userService.GetActiveUsers();

            var sadw = users;
            return users.Select(el=> UserVM.FromDto(el));
        }
        
        [HttpPost("getUserById" + "/" + "{id}")]
        public UserVM GetUserById(int Id)
        {
            
            var user = applicationContext.Users.Find(Id);
            return new UserVM
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Mail = user.Mail,
                Avatar = user.Avatar
            };
        }
        // В отдельный контроллер
        [HttpPost("login")]
        public UserVM RegUser([FromBody]UserVM data)
        {
            var dt = data;
            var user = applicationContext.Users.SingleOrDefault(element => element.Password == data.Password);
            if (user == null)
            {
                return null;
            };

            return new UserVM
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Mail = user.Mail,
                Avatar = user.Avatar
            };
        }

        [HttpPost("chatList")]
        public MiddleConversationVM ChatList([FromBody]MiddleConversationVM data)
        {
            var us = data;
            //var dt = this._userService.MiddleConversations.Where(element => element.UserId == data.UserId);
           // var dt2 = applicationContext.MiddleConversations.Where(element => element.ConversationId == );
            return null;
        }
    }

}
