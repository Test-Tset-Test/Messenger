using System;
using DTO;
using System.Collections.Generic;

namespace Contracts.Service
{
    public interface IUserService
    {
        List<UserDto> GetActiveUsers();
    }
}
