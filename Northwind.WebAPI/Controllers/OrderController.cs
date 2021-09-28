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
    public class OrderController : ControllerBase
    {
        private readonly IOrdersService _service;

        public OrderController(IOrdersService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Object> Get()
        {
            return _service.Get();
        }
    }
}
