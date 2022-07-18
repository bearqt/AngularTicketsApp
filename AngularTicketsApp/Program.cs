using System;
using System.Linq;
using AngularTicketsApp;
using AngularTicketsApp.ControllersFormatters;
using AngularTicketsApp.Data;
using AngularTicketsApp.Data.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

var csvFormatterOptions = new CsvFormatterOptions();
csvFormatterOptions.CsvDelimiter = ";";

builder.Services.AddResponseCompression(options => 
{
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] { "text/csv" });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder
                .AllowAnyOrigin() 
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});

builder.Services.AddControllers(options =>
{
    options.OutputFormatters.Add(new CsvOutputFormatter(csvFormatterOptions));
    options.FormatterMappings.SetMediaTypeMappingForFormat("csv", MediaTypeHeaderValue.Parse("text/csv"));
});
builder.Services.AddDbContext<OperatorTicketsAppContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("Database") ?? string.Empty);
});
builder.Services.AddScoped<ITicketsRepository, TicketsRepository>();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseStaticFiles();
app.UseCors("AllowAll");
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();