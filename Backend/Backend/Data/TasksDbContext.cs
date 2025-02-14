using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class TasksDbContext : DbContext
    {
        public TasksDbContext(DbContextOptions<TasksDbContext> options) : base(options)
        {
        }

        public DbSet<_Task> Tasks { get; set; }
    }
}
