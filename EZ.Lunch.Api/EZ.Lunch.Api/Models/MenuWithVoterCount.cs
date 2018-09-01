using EZ.Lunch.Api.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZ.Lunch.Api.Models
{
    public class MenuWithVoterCount : Menu
    {
        public int VoterCount { get; set; }
    }
}
