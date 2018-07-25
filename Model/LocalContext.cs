using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleApp.Model
{
    public class LocalContext : DbContext
    {
        private IConfiguration _config;
        private DbContextOptions _option;

        public LocalContext(IConfiguration config,DbContextOptions options): 
            base(options)
        {
            _config = config;
            _option = options;
        }

        public DbSet<UserMaster> usermaster { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config["ConnectionStrings:LocalDB"]);  
        }
    }
}
