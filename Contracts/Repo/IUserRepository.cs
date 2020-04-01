using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts.Repo
{
    public interface IUserRepository
    {
        List<UserDto> GetActiveUsers();
    }
}
