using HumanResources.Services.Employees.Application.Repositories;

namespace HumanResources.Services.Employees.Application.Wrappers;

public interface IRepositoryWrapper
{
    IEmployeeRepository Employees { get; }

    void SaveChanges();

    Task SaveChangesAsync();
}