using DAL_7224.DBO;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL_7224.Repositories
{
    public abstract class CreateUpdateRep<T> where T : class
    {
        protected readonly ForecastDBContext forecastDBContext;

        public CreateUpdateRep(ForecastDBContext forecastDb)
        {
            forecastDBContext = forecastDb;
        }
    }
}
