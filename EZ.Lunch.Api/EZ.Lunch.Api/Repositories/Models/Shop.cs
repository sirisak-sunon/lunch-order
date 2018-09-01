using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZ.Lunch.Api.Repositories.Models
{
    public class Shop
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public string DefaultMenuId { get; set; }
        public IEnumerable<Menu> Menues { get; set; }
    }

    public class Menu
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
    }
}
