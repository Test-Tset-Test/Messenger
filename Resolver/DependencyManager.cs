using BLL;
using Contracts;
using Contracts.Repo;
using Contracts.Service;
using DAL;
using DAL.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Resolver
{
    public class DependencyManager
    {
        public static void Resolve(IServiceCollection services) {
            services.AddScoped<IDatabaseInitalizer, DatabaseInitializer>();
            services.AddScoped<IUserRepository, UserRepositiry>();
            services.AddScoped<IUserService, UsersService>();
            services.AddScoped<IUserConversationRepository, UserConversationRepository>();
            services.AddScoped<IUserConversationService, UserConversationService>();
        }
    }
}
