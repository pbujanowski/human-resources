using HumanResources.Common.Library.Abstractions.Repositories;
using HumanResources.Services.Employees.Application.Repositories;
using HumanResources.Services.Employees.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HumanResources.Services.Employees.Infrastructure.Repositories;

public class EmployeeRepository : RepositoryBase<Employee, Guid>, IEmployeeRepository
{
    public EmployeeRepository(DbContext dbContext)
        : base(dbContext)
    {
    }
}