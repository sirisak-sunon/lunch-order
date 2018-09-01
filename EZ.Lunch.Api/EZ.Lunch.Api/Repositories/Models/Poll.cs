using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EZ.Lunch.Api.Repositories.Models
{
    public class Poll
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public string SelectedShopId { get; set; }
        public IEnumerable<Order> Orders { get; set; }
    }

    public class Order
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string MenuId { get; set; }
        public string Count { get; set; }
    }
}
