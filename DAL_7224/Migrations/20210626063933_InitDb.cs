using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL_7224.Migrations
{
    public partial class InitDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DayForecasts",
                columns: table => new
                {
                    DayForecastId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Weather = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    WeatherCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MinTeperature = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MaxTeperature = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayForecasts", x => x.DayForecastId);
                });

            migrationBuilder.CreateTable(
                name: "HourForecasts",
                columns: table => new
                {
                    HourForecastId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Hour = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Weather = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    WeatherCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Teperature = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    DayForecastId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HourForecasts", x => x.HourForecastId);
                    table.ForeignKey(
                        name: "FK_HourForecasts_DayForecasts_DayForecastId",
                        column: x => x.DayForecastId,
                        principalTable: "DayForecasts",
                        principalColumn: "DayForecastId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HourForecasts_DayForecastId",
                table: "HourForecasts",
                column: "DayForecastId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HourForecasts");

            migrationBuilder.DropTable(
                name: "DayForecasts");
        }
    }
}
