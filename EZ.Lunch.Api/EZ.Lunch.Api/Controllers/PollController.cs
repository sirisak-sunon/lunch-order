using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EZ.Lunch.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PollController : Controller
    {
        [HttpGet]
        public void ShowPoll ()
        {
            throw new NotImplementedException();
        }
        [HttpPost]
        public void CreatePoll()
        {
            throw new NotImplementedException();
        }
        [HttpGet]
        public void ShowVoteDetail()
        {
            throw new NotImplementedException();
        }
    }
}