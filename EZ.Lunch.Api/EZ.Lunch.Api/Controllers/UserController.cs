using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EZ.Lunch.Api.Repositories;
using EZ.Lunch.Api.Repositories.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EZ.Lunch.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        public readonly IDataRepository<Poll> PollDac;
        public readonly IDataRepository<Shop> ShopDac;
        public readonly IDataRepository<User> UserDac;

        public UserController(
            IDataRepository<Poll> PollDac,
            IDataRepository<Shop> ShopDac,
            IDataRepository<User> UserDac
            )
        {
            this.PollDac = PollDac;
            this.ShopDac = ShopDac;
            this.UserDac = UserDac;
        }

        [HttpGet]
        public IEnumerable<User> List()
        {
            return UserDac.List(u => true);
        }

        [HttpPost]
        public void Create([FromBody]User request)
        {
            UserDac.Create(request);
        }

        [HttpPost]
        public void Edit([FromBody]User request)
        {
            var user = UserDac.Get(u => u.Id == request.Id);
            user.DisplayName = request.DisplayName;
            UserDac.UpdateOne(u => u.Id == request.Id, user);
        }

        [HttpPost]
        public void Delete(string id)
        {
            UserDac.DeleteOne(u => u.Id == id);
        }
    }
}