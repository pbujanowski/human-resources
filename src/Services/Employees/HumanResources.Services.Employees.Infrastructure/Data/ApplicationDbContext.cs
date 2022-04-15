using HumanResources.Services.Employees.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HumanResources.Services.Employees.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<Employee> Employees => Set<Employee>();

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public override int SaveChanges()
    {
        SetProperties();

        return base.SaveChanges();
    }

    public override int SaveChanges(bool acceptAllChangesOnSuccess)
    {
        SetProperties();

        return base.SaveChanges(acceptAllChangesOnSuccess);
    }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
    {
        SetProperties();

        return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        SetProperties();

        return base.SaveChangesAsync(cancellationToken);
    }

    private void SetProperties()
    {
        var entries = ChangeTracker.Entries()
            .Where(e => e.Entity is EntityBase
                && (e.State == EntityState.Added
                    || e.State == EntityState.Modified));

        var now = DateTime.Now;

        foreach (var entry in entries)
        {
            ((EntityBase)entry.Entity).UpdatedAt = now;
            if (entry.State == EntityState.Added)
            {
                ((EntityBase)entry.Entity).CreatedAt = now;
            }
        }
    }
}