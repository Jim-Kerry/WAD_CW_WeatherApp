﻿// <auto-generated />
using DAL_7224.DBO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DAL_7224.Migrations
{
    [DbContext(typeof(ForecastDBContext))]
    partial class ForecastDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DAL_7224.DBO.DayForecast", b =>
                {
                    b.Property<int>("DayForecastId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DayTime")
                        .HasColumnType("int");

                    b.Property<decimal>("MaxTeperature")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("MinTeperature")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Weather")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("WeatherCode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DayForecastId");

                    b.ToTable("DayForecasts");
                });

            modelBuilder.Entity("DAL_7224.DBO.HourForecast", b =>
                {
                    b.Property<int>("HourForecastId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DayForecastId")
                        .HasColumnType("int");

                    b.Property<string>("Hour")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Teperature")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Weather")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("WeatherCode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("HourForecastId");

                    b.HasIndex("DayForecastId");

                    b.ToTable("HourForecasts");
                });

            modelBuilder.Entity("DAL_7224.DBO.HourForecast", b =>
                {
                    b.HasOne("DAL_7224.DBO.DayForecast", "DayForecast")
                        .WithMany()
                        .HasForeignKey("DayForecastId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DayForecast");
                });
#pragma warning restore 612, 618
        }
    }
}
