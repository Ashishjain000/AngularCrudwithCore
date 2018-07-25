using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SampleApp.Model
{
    public class UserMaster
    {
        [Key]
        public int userid { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public bool Active { get; set; }
        public string password { get; set; }
        public string username { get; set; }
    }
}
