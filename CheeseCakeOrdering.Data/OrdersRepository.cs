using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheeseCakeOrdering.Data
{
    public class OrdersRepository
    {
        private readonly string _connectionString;

        public OrdersRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Orders orders)
        {
            using var context = new OrdersDataContext(_connectionString);
            context.Orders.Add(orders);
            context.SaveChanges();
        }

        public List<Orders> GetAllOrders()
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.ToList();
        }

        public Orders GetById(int id)
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }
    }
}
