using Northwind.WebAPI.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.WebAPI.Services
{
    public interface IProductsService : IReadService<Product>
    {
        
    }
}
