using Microsoft.AspNetCore.Mvc;
using Northwind.WebAPI.Database;
using Northwind.WebAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductsService _service;

        public ProductController(IProductsService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _service.Get();
        }
    }
}
