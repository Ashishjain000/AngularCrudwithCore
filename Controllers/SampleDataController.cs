using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SampleApp.Model;

namespace SampleApp.Controllers
{
    [Route("api/Sample")] 
    public class SampleDataController : Controller
    {
        private IConfiguration _config;
        private LocalContext _context;

        public SampleDataController(IConfiguration config,LocalContext context)
        {
            _config = config;
            _context = context;
        }
       
        

        [HttpGet("GetMaster")]
        public List<UserMaster> GetMaster()
        {
            var data = _context.usermaster.ToList();
            return data;
        }

        [HttpGet("GetByMaster")]
        public UserMaster GetByMaster(int userId)
        {
            var data = _context.usermaster.Where(x=>x.userid==userId).FirstOrDefault();
            return data;
        }

        [HttpPost("SaveUser")]
        public int SaveUser([FromBody] UserMaster user){
            _context.Add(user);
          return  _context.SaveChanges();
        }

        [HttpPost("UpdateUser")]
        public int UpdateUser([FromBody] UserMaster user){
            _context.Update(user);
          return  _context.SaveChanges();
        }
    }
}
