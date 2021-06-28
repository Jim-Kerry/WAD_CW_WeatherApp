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
        public async Task<DayForecast> Get(int id)
        {
            return await repository.FindOneAsync(id);
        }

        // POST api/<DayForecastsController>
        [HttpPost]
        public async Task<ActionResult<DayForecast>> Post(DayForecast dayForecast)
        {
            try
            {
                await repository.InsertAsync(dayForecast);
                return CreatedAtAction("GetDayForecast", new { id = dayForecast.DayForecastId }, dayForecast);
            }catch(Exception e)
            {
                throw;
            }
            
        }

        // PUT api/<DayForecastsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, DayForecast value)
        {
            if(id != value.DayForecastId)
            {
                return BadRequest();
            }
            await repository.UpdateAsync(value);

            return NoContent();
        }

        // DELETE api/<DayForecastsController>/5
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
