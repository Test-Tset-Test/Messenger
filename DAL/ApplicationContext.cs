using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Threading.Tasks;

namespace DAL
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<UserConversation> UserConversations { get; set; }
        public DbSet<Messages> Messageses { get; set; }
        public ApplicationContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserConversation>()
                .HasKey(t => new { t.UserId, t.ConversationId });

            //modelBuilder.Entity<UserConversation>( entity =>
            //{
            //    entity.ToTable(name: "");
            //    entity.HasMany(r => r.User);
            //});

            modelBuilder.Entity<UserConversation>()
                .HasOne(sc => sc.User)
                .WithMany(s => s.UserConversations)
                .HasForeignKey(sc => sc.UserId);

            modelBuilder.Entity<UserConversation>()
                .HasOne(sc => sc.Conversation)
                .WithMany(s => s.UserConversations)
                .HasForeignKey(sc => sc.ConversationId);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-N2QB6CS\\SQL2019;Initial Catalog=messengerbd;User ID=sa;Password=H88cp229");
        }
    }
}
