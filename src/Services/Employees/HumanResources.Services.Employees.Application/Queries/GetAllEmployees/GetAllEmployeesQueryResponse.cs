using HumanResources.Services.Employees.Application.Dto;

namespace HumanResources.Services.Employees.Application.Queries.GetAllEmployees;

public class GetAllEmployeesQueryResponse
{
    public ICollection<EmployeeDto>? Employees { get; }

    public GetAllEmployeesQueryResponse(ICollection<EmployeeDto>? employees)
    {
        Employees = employees;
    }
}