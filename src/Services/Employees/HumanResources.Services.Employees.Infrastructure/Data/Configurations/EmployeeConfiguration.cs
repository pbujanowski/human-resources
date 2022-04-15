using HumanResources.Services.Employees.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HumanResources.Services.Employees.Infrastructure.Data.Configurations;

public class EmployeeConfiguration : EntityConfigurationBase<Employee>
{
    public override void Configure(EntityTypeBuilder<Employee> builder)
    {
        base.Configure(builder);

        builder.Property(e => e.FirstName)
            .IsRequired();

        builder.Property(e => e.LastName)
            .IsRequired();

        builder.Property(e => e.PersonalIdNumber)
            .IsRequired();

        builder.Property(e => e.Birthdate)
            .IsRequired();
    }
}