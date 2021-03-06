using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
          _context = context;
        }


        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok(await _context.values.ToListAsync());
        }

        /*public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }*/

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            var value = _context.values.FirstOrDefault(x=>x.Id == id);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
