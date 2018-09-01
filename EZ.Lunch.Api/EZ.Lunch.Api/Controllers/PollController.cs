﻿using System;
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
        public void Show ()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Create()
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public void ShowVoter()
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public void ListShop()
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public void ListMenu()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Vote()
        {
            throw new NotImplementedException();
        }
    }
}