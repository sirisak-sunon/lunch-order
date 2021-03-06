﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EZ.Lunch.Api.Models;
using EZ.Lunch.Api.Repositories;
using EZ.Lunch.Api.Repositories.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EZ.Lunch.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PollController : Controller
    {
        public readonly IDataRepository<Poll> PollDac;
        public readonly IDataRepository<Shop> ShopDac;
        public readonly IDataRepository<User> UserDac;

        public PollController(
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
        public IEnumerable<Poll> List()
        {
            return PollDac.List(x => true);
        }

        [HttpGet("{id}")]
        public PollWithMenu Get(string id, string showCurrent)
        {
            Poll poll = null;
            if (string.IsNullOrWhiteSpace(showCurrent)) poll = PollDac.Get(x => x.Id == id);
            else poll = PollDac.List(x => true).OrderBy(x => x.CreateDate).LastOrDefault();
            if (poll == null) return null;

            var pollWithMenu = JsonConvert.DeserializeObject<PollWithMenu>(JsonConvert.SerializeObject(poll));
            var shop = ShopDac.Get(x => x.Id == poll.SelectedShopId);
            pollWithMenu.SelectedShopName = shop.Name;
            pollWithMenu.Menues = shop.Menues;

            if (pollWithMenu.Menues != null && pollWithMenu.Menues.Any())
            {
                foreach (var menu in pollWithMenu.Menues)
                {
                    menu.VoterCount = pollWithMenu.Orders?.Count(x => x.MenuId == menu.Id) ?? 0;
                }
            }

            return pollWithMenu;
        }

        [HttpPost("{username}")]
        public RequestResponse Create([FromBody]Poll request, string username)
        {
            var response = new RequestResponse();
            try
            {
                request.Id = Guid.NewGuid().ToString();
                request.CreateBy = username;
                request.CreateDate = DateTime.UtcNow;

                PollDac.Create(request);

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

        [HttpGet("{id}")]
        public IEnumerable<UserWithMenu> ShowVoter(string id)
        {
            var poll = PollDac.Get(x => x.Id == id);
            var shop = ShopDac.Get(x => x.Id == poll.SelectedShopId);
            var users = UserDac.List(x => true);
            var userWithMenus = JsonConvert.DeserializeObject<IEnumerable<UserWithMenu>>(JsonConvert.SerializeObject(users));

            foreach (var user in userWithMenus)
            {
                var selectedMenuId = poll.Orders?.FirstOrDefault(x => x.UserId == user.Id)?.MenuId;
                user.MenuName = shop.Menues?.FirstOrDefault(x => x.Id == selectedMenuId)?.Name;
            }

            return userWithMenus;
        }

        [HttpPost("{username}/{pollid}/{menuid}")]
        public RequestResponse Vote(string username, string pollid, string menuid)
        {
            var response = new RequestResponse();
            try
            {
                var poll = PollDac.Get(x => x.Id == pollid);
                var shop = ShopDac.Get(x => x.Id == poll.SelectedShopId);
                var user = UserDac.Get(x => x.Username == username);

                var orders = poll.Orders?.ToList() ?? new List<Order>();

                if (poll.Orders.Any(x => x.UserId == user.Id))
                {
                    poll.Orders.FirstOrDefault(x => x.UserId == user.Id).MenuId = menuid;
                }
                else
                {
                    orders.Add(new Order
                    {
                        Id = Guid.NewGuid().ToString(),
                        MenuId = menuid,
                        UserId = user.Id,
                    });
                }
                poll.Orders = orders;

                PollDac.UpdateOne(x => x.Id == pollid, poll);

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