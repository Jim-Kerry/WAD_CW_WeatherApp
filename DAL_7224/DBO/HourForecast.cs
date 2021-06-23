using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.DBO
{
    public class HourForecast
    {
        public int HourForecastId { get; set; }
        
        [Required]
        public string Hour { get; set; }

        [Required]
        [MaxLength(250)]
        public string Weather { get; set; }
        public string WeatherCode { get; set; }

        [Required]
        public decimal Teperature { get; set; }

        public int DayForecastId { get; set; }
        public DayForecast DayForecast { get; set; }
    }
}
