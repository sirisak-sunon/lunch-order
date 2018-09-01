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
    public class ShopController : Controller
    {
        public readonly IDataRepository<Poll> PollDac;
        public readonly IDataRepository<Shop> ShopDac;
        public readonly IDataRepository<User> UserDac;

        public ShopController(
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
        public IEnumerable<Shop> List()
        {
            return ShopDac.List(s => true);
        }

        [HttpGet("{id}")]
        public Shop Get(string id)
        {
            return ShopDac.Get(s => s.Id == id);
        }

        [HttpPost]
        public RequestResponse Create([FromBody]Shop request)
        {
            var response = new RequestResponse();
            try
            {
                request.Id = Guid.NewGuid().ToString();
                ShopDac.Create(request);

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
        public RequestResponse Edit([FromBody]Shop request)
        {
            var response = new RequestResponse();
            try
            {
                var shop = ShopDac.Get(s => s.Id == request.Id);
                shop.Name = request.Name;
                ShopDac.UpdateOne(s => s.Id == request.Id, shop);

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

        [HttpPost("{id}")]
        public RequestResponse Delete(string id)
        {
            var response = new RequestResponse();
            try
            {
                ShopDac.DeleteOne(s => s.Id == id);

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

        [HttpPost("{id}")]
        public RequestResponse AddMenu([FromBody]Menu request, string id)
        {
            var response = new RequestResponse();
            try
            {
                var shop = ShopDac.Get(s => s.Id == id);
                var menues = shop.Menues?.ToList() ?? new List<Menu>();
                request.Id = Guid.NewGuid().ToString();
                menues.Add(request);
                shop.Menues = menues;
                ShopDac.UpdateOne(s => s.Id == id, shop);

                response.Code = 200;
                response.Message = "success.";
            }
            catch (Exception ex)
            {
                response.Code = 500;
                response.Message = "error: " + ex.ToString();
            }
            return response;
        }

        [HttpPost("{id}")]
        public RequestResponse EditMenu([FromBody]Menu request, string id)
        {
            var response = new RequestResponse();
            try
            {
                var shop = ShopDac.Get(s => s.Id == id);
                var menu = shop.Menues.FirstOrDefault(s => s.Id == request.Id);
                menu.Name = request.Name;
                ShopDac.UpdateOne(s => s.Id == id, shop);

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

        [HttpPost("{menuid}/{shopid}")]
        public RequestResponse DeleteMenu(string menuid, string shopid)
        {
            var response = new RequestResponse();
            try
            {
                var shop = ShopDac.Get(s => s.Id == shopid);
                shop.Menues = shop.Menues.Where(m => m.Id != menuid).ToList();
                ShopDac.UpdateOne(s => s.Id == shopid, shop);

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

        [HttpPost("{shopid}/{defaultmenuid}")]
        public RequestResponse SetDefaultMenu(string shopid, string defaultmenuid)
        {
            var response = new RequestResponse();
            try
            {
                var shop = ShopDac.Get(s => s.Id == shopid);
                shop.DefaultMenuId = defaultmenuid;
                ShopDac.UpdateOne(s => s.Id == shopid, shop);

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