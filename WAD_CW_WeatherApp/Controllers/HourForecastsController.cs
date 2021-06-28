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
    public class HourForecastsController : ControllerBase
    {
        private IRepository<HourForecast> repository;

        public HourForecastsController(IRepository<HourForecast> repository)
        {
            this.repository = repository;
        }

        // GET: api/<HourForecastsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HourForecast>>> Get()
        {
            return await repository.GetAllAsnc();
        }

        // GET api/<HourForecastsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "N/A";
        }

        // POST api/<HourForecastsController>
        [HttpPost]
        public async Task<ActionResult<HourForecast>> Post(HourForecast hourForecast)
        {
            try
            {
                await repository.InsertAsync(hourForecast);
                return CreatedAtAction("GetHourForecast", new { id = hourForecast.HourForecastId }, hourForecast);
            }
            catch (Exception e)
            {
                throw;
            }
        }

        // PUT api/<HourForecastsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HourForecastsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var d = repository.FindOneAsync(id);
            if (d == null)
            {
                return NotFound();
            }


            await repository.DeleteAsync(id);

            return NoContent();
        }
    }
}
