using DAL_7224.DBO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.Repositories
{
    public abstract class CreateUpdateRep<T> where T : class
    {
        protected readonly ForecastDBContext forecastDBContext;

        public CreateUpdateRep(ForecastDBContext forecastDb)
        {
            forecastDBContext = forecastDb;
        }

        public async Task InsertAsync(T entity)
        {
            forecastDBContext.Add(entity);
            await forecastDBContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            forecastDBContext.Update(entity);
            await forecastDBContext.SaveChangesAsync();
        }
    }
}
