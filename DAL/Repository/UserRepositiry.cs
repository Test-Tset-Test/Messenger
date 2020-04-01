using Contracts.Repo;
using DTO;
using DTO.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class UserRepositiry: IUserRepository
    {
        private ApplicationContext _context = new ApplicationContext();
        public List<UserDto> GetActiveUsers()
        {
           var result = _context.Users
                //.Where(el => el.Status == UserStatus.Active)
                .ToList();

            return result.Select(el=>new UserDto { 
                Id = el.Id,
                FirstName = el.FirstName,
                LastName = el.LastName,
                Mail = el.Mail,
                Avatar = el.Avatar,
                Role = "user"
            }).ToList();
        }
    }
}
