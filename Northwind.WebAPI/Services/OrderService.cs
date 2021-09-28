using Microsoft.EntityFrameworkCore;
using Northwind.WebAPI.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.WebAPI.Services
{
    public class OrderService : IOrdersService
    {
        private readonly NorthwindContext _context;

        public OrderService(NorthwindContext context)
        {
            _context = context;
        }
        public IEnumerable<Object> Get()
        {
            var data = (
                        from o in _context.Orders
                        join od in _context.OrderDetails on o.OrderId equals od.OrderId
                        join p in _context.Products on od.ProductId equals p.ProductId
                        join s in _context.Suppliers on p.SupplierId equals s.SupplierId
                        join c in _context.Categories on p.CategoryId equals c.CategoryId
                        select new
                        {
                            orderId = o.OrderId,
                            customerId = o.CustomerId,
                            orderDate = o.OrderDate,
                            shipCountry = o.ShipCountry, // order
                            productName = p.ProductName,
                            unitPrice = p.UnitPrice, // product
                            supplierId = s.SupplierId,
                            companyName = s.CompanyName,
                            city = s.City, // supplier
                            categoryId = c.CategoryId,
                            categoryName = c.CategoryName
                        }
                        );

            return data.ToList();
        }
    }
}
