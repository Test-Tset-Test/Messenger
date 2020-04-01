using Contracts.Repo;
using Contracts.Service;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BLL
{
    public class UsersService: IUserService
    {
        IUserRepository userRepository;
        public UsersService(IUserRepository userRepository) {
            this.userRepository = userRepository;
        }
        public List<UserDto> GetActiveUsers()
        {
            var result = this.userRepository.GetActiveUsers();
            return result.Where(el=>el.Role == "user").ToList();
        }
    }
}
