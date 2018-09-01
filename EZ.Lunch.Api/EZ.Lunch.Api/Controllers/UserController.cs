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
        public void List()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Add()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Edit()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Delete()
        {
            throw new NotImplementedException();
        }
    }
}