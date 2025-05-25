using CheeseCakeOrdering.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace CheeseCakeOrdering.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private string _connectionString;

        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public void Add(Orders order)
        {
            var repo = new OrdersRepository(_connectionString);
            repo.Add(order);
        }

        [HttpGet]
        [Route("getallorders")]
        public List<Orders> GetAllOrders()
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetAllOrders();
        }

        [HttpGet]
        [Route("getbyid")]
        public Orders GetById(int id)
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetById(id);
        }

    }
}
