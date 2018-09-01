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
        public void Create([FromBody]Shop request)
        {
            ShopDac.Create(request);
        }

        [HttpPost]
        public void Edit([FromBody]Shop request)
        {
            var shop = ShopDac.Get(s => s.Id == request.Id);
            shop.Name = request.Name;
            ShopDac.UpdateOne(s => s.Id == request.Id, shop);
        }

        [HttpPost("{id}")]
        public void Delete(string id)
        {
            ShopDac.DeleteOne(s => s.Id == id);
        }

        [HttpPost("{id}")]
        public void AddMenu([FromBody]Menu menu, string id)
        {
            var shop = ShopDac.Get(s => s.Id == id);
            var menues = shop.Menues.ToList();
            menues.Add(menu);
            shop.Menues = menues;
            ShopDac.UpdateOne(s => s.Id == id, shop);
        }

        [HttpPost("{id}")]
        public void EditMenu([FromBody]Menu menu, string id)
        {
            var shop = ShopDac.Get(s => s.Id == id);
            var newMenu = shop.Menues.FirstOrDefault(s => s.Id == menu.Id);
            newMenu = menu;
            ShopDac.UpdateOne(s => s.Id == id, shop);
        }

        [HttpPost("{id}")]
        public void DeleteMenu(string menuid, string shopid)
        {
            var shop = ShopDac.Get(s => s.Id == shopid);
            shop.Menues = shop.Menues.Where(m => m.Id != menuid).ToList();
            ShopDac.UpdateOne(s => s.Id == shopid, shop);
        }

        [HttpPost("{shopid}/{defaultmenuid}")]
        public void SetDefaultMenu(string shopid, string defaultmenuid)
        {
            var shop = ShopDac.Get(s => s.Id == shopid);
            shop.DefaultMenuId = defaultmenuid;
            ShopDac.UpdateOne(s => s.Id == shopid, shop);
        }
    }
}