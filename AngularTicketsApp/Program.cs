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
using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSpaStaticFiles(configuration => 
        configuration.RootPath = "ClientApp/dist"
    );

var csvFormatterOptions = new CsvFormatterOptions();
csvFormatterOptions.CsvDelimiter = ",";

builder.Services.AddResponseCompression(options => 
{
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] { "text/csv" });
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
if (!app.Environment.IsDevelopment())
{
    app.UseSpaStaticFiles();
}

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
 
    if (app.Environment.IsDevelopment())
    {
        spa.UseAngularCliServer(npmScript: "start");
    }
});

app.Run();