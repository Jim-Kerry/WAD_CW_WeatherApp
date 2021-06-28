using DAL_7224.DBO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.Repositories
{
    public class HourForecastRep : CreateUpdateRep<HourForecast>, IRepository<HourForecast>
    {
        public HourForecastRep(ForecastDBContext forecastDBContext) : base(forecastDBContext)
        {

        }
        public async Task DeleteAsync(int id)
        {
            try
            {
                var h = await forecastDBContext.HourForecasts.FindAsync(id);
                forecastDBContext.Remove(h);
                await forecastDBContext.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
            
        }

        public bool Exists(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<HourForecast> FindOneAsync(int id)
        {
            return await forecastDBContext.HourForecasts.Include(item=>item.DayForecast).FirstOrDefaultAsync(day => day.HourForecastId == id);
        }

        public async Task<List<HourForecast>> GetAllAsnc()
        {
            return await forecastDBContext.HourForecasts.ToListAsync();
        }
    }
}
