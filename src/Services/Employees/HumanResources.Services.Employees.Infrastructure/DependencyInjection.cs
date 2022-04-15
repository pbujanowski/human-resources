using HumanResources.Services.Employees.Application.Repositories;
using HumanResources.Services.Employees.Application.Wrappers;
using HumanResources.Services.Employees.Infrastructure.Data;
using HumanResources.Services.Employees.Infrastructure.Repositories;
using HumanResources.Services.Employees.Infrastructure.Wrappers;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HumanResources.Services.Employees.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<DbContext, ApplicationDbContext>(options =>
            options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

        services.AddScoped<IEmployeeRepository, EmployeeRepository>();
        services.AddScoped<IRepositoryWrapper, RepositoryWrapper>();

        return services;
    }

    public static async Task<IApplicationBuilder> UseInfrastructure(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();
        using var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        await dbContext.Database.MigrateAsync();

        return app;
    }
}