using DAL_7224.DBO;
using DAL_7224.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WAD_CW_WeatherApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DayForecastsController : ControllerBase
    {

        private IRepository<DayForecast> repository;
        public DayForecastsController(IRepository<DayForecast> repository)
        {
            this.repository = repository;
        }

        // GET: api/<DayForecastsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DayForecast>>> Get()
        {
            return await repository.GetAllAsnc();
        }

        // GET api/<DayForecastsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DayForecastsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<DayForecastsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DayForecastsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
