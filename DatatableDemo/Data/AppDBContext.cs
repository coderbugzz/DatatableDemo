using DatatableDemo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatatableDemo.Data
{
    public class AppDBContext : DbContext
    {
        private readonly DbContextOptions<AppDBContext> _options;

        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {
            _options = options;
        }

        public DbSet<User> users { get; set; }
    }
}
