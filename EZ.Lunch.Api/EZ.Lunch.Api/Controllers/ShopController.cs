using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EZ.Lunch.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ShopController : Controller
    {
        public ShopController()
        {
        }

        [HttpGet]
        public void List()
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public void Get()
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