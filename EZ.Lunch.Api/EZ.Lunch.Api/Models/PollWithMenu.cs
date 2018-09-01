using EZ.Lunch.Api.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZ.Lunch.Api.Models
{
    public class PollWithMenu : Poll
    {
        public IEnumerable<Menu> Menues { get; set; }
    }
}
