using Microsoft.EntityFrameworkCore;
using Northwind.WebAPI.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.WebAPI.Services
{
    public class ProductsService : IProductsService
    {
        private readonly NorthwindContext _context;

        public ProductsService(NorthwindContext context)
        {
            _context = context;
        }
        public IEnumerable<Product> Get()
        {
            return _context.Products.Include("Supplier").ToList();
        }
    }
}
