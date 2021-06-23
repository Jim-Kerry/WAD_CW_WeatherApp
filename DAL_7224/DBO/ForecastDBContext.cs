using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.DBO
{
    public class ForecastDBContext : DbContext
    {
        public ForecastDBContext(DbContextOptions<ForecastDBContext> options) : base(options)
        {

        }

        public DbSet<DayForecast> DayForecast { get; set; }
        public DbSet<HourForecast> HourForecasts { get; set; }
    }
}
