using HumanResources.Services.Employees.Application.Dto;

namespace HumanResources.Services.Employees.Application.Queries.GetEmployeeById;

public class GetEmployeeByIdQueryResponse
{
    public EmployeeDto? Employee { get; }

    public GetEmployeeByIdQueryResponse(EmployeeDto? employee)
    {
        Employee = employee;
    }
}