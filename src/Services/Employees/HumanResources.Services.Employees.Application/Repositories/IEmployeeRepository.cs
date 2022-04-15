using HumanResources.Common.Library.Abstractions.Repositories;
using HumanResources.Services.Employees.Domain.Entities;

namespace HumanResources.Services.Employees.Application.Repositories;

public interface IEmployeeRepository : IRepositoryBase<Employee>
{
}