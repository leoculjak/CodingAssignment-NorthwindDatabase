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
    public class SupplierController : ControllerBase
    {
        private readonly ISuppliersService _service;

        public SupplierController(ISuppliersService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Supplier> Get()
        {
            return _service.Get();
        }
    }
}
