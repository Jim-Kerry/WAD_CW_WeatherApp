using DAL_7224.DBO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.Repositories
{
    public class DayForecastRep : CreateUpdateRep<DayForecast>, IRepository<DayForecast>
    {
        public DayForecastRep(ForecastDBContext forecastDBContext) : base(forecastDBContext)
        {

        }
        public async Task DeleteAsync(int id)
        {
            try
            {
                var d = await forecastDBContext.DayForecasts.FindAsync(id);
                forecastDBContext.DayForecasts.Remove(d);
                await forecastDBContext.SaveChangesAsync();
            }catch(Exception e)
            {
                throw e;
            }
            
        }

        public bool Exists(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<DayForecast> FindOneAsync(int id)
        {
            return await forecastDBContext.DayForecasts.FirstOrDefaultAsync(day => day.DayForecastId == id);
        }

        public async Task<List<DayForecast>> GetAllAsnc()
        {
            return await forecastDBContext.DayForecasts.ToListAsync();
        }

        
    }
}
