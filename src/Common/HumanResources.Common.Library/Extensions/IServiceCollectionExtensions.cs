using HumanResources.Common.Library.Configurations;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HumanResources.Common.Library.Extensions
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddCors(this IServiceCollection services, IConfiguration configuration)
        {
            var corsConfiguration = configuration.GetSection("Cors").Get<CorsConfiguration>();

            services.AddCors(options => options.AddDefaultPolicy(policy =>
                policy.WithOrigins(corsConfiguration?.Urls?.ToArray())
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials()));

            return services;
        }
    }
}