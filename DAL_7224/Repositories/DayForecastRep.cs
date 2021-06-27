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
        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public bool Exists(int id)
        {
            throw new NotImplementedException();
        }

        public Task<DayForecast> FindOneAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<DayForecast>> GetAllAsnc()
        {
            return await forecastDBContext.DayForecasts.ToListAsync();
        }

        
    }
}
