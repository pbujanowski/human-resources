using HumanResources.Services.Employees.Application.Repositories;
using HumanResources.Services.Employees.Application.Wrappers;
using Microsoft.EntityFrameworkCore;

namespace HumanResources.Services.Employees.Infrastructure.Wrappers;

public class RepositoryWrapper : IRepositoryWrapper
{
    private readonly DbContext _dbContext;

    public RepositoryWrapper(DbContext dbContext, IEmployeeRepository employees)
    {
        _dbContext = dbContext;
        Employees = employees;
    }

    public IEmployeeRepository Employees { get; }

    public void SaveChanges()
    {
        _dbContext.SaveChanges();
    }

    public async Task SaveChangesAsync()
    {
        await _dbContext.SaveChangesAsync();
    }
}