using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EZ.Lunch.Api.Models;
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
        public RequestResponse Create([FromBody]User request)
        {
            var response = new RequestResponse();
            try
            {
                request.Id = Guid.NewGuid().ToString();
                UserDac.Create(request);

                response.Code = 200;
                response.Message = "success.";
            }
            catch (Exception ex)
            {
                response.Code = 500;
                response.Message = "error: " + ex.Message;
            }
            return response;
        }

        [HttpPost]
        public RequestResponse Edit([FromBody]User request)
        {
            var response = new RequestResponse();
            try
            {
                var user = UserDac.Get(u => u.Id == request.Id);
                user.DisplayName = request.DisplayName;
                UserDac.UpdateOne(u => u.Id == request.Id, user);

                response.Code = 200;
                response.Message = "success.";
            }
            catch (Exception ex)
            {
                response.Code = 500;
                response.Message = "error: " + ex.Message;
            }
            return response;
        }

        [HttpPost]
        public RequestResponse Delete(string id)
        {
            var response = new RequestResponse();
            try
            {
                UserDac.DeleteOne(u => u.Id == id);

                response.Code = 200;
                response.Message = "success.";
            }
            catch (Exception ex)
            {
                response.Code = 500;
                response.Message = "error: " + ex.Message;
            }
            return response;
        }
    }
}