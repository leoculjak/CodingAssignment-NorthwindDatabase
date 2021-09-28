using Microsoft.EntityFrameworkCore;
using Northwind.WebAPI.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.WebAPI.Services
{
    public class SupplierService : ISuppliersService
    {
        private readonly NorthwindContext _context;

        public SupplierService(NorthwindContext context)
        {
            _context = context;
        }
        public IEnumerable<Supplier> Get()
        {
            return _context.Suppliers.ToList();
        }
    }
}
