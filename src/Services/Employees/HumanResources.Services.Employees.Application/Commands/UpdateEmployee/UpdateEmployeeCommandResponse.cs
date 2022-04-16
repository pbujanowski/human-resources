using HumanResources.Services.Employees.Application.Dto;

namespace HumanResources.Services.Employees.Application.Commands.UpdateEmployee;

public class UpdateEmployeeCommandResponse
{
    public EmployeeDto Employee { get; }

    public UpdateEmployeeCommandResponse(EmployeeDto employee)
    {
        Employee = employee;
    }
}