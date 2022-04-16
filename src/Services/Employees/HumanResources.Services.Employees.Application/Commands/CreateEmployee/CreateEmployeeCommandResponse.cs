using HumanResources.Services.Employees.Application.Dto;

namespace HumanResources.Services.Employees.Application.Commands.CreateEmployee;

public class CreateEmployeeCommandResponse
{
    public EmployeeDto Employee { get; }

    public CreateEmployeeCommandResponse(EmployeeDto employee)
    {
        Employee = employee;
    }
}