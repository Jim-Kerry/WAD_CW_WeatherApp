using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.DBO
{
    public class DayForecast
    {
        public int DayForecastId { get; set; }

        [Required]
        public DateTime Date { get; set; }
        
        [Required]
        [MaxLength(250)]
        public string Weather { get; set; }
        public string WeatherCode { get; set; }
        
        [Required]
        public decimal MinTeperature { get; set; }
        public decimal MaxTeperature { get; set; }
    }
}
