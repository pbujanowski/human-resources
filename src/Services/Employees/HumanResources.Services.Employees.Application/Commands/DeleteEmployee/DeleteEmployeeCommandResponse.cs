using HumanResources.Services.Employees.Application.Dto;

namespace HumanResources.Services.Employees.Application.Commands.DeleteEmployee;

public class DeleteEmployeeCommandResponse
{
    public EmployeeDto Employee { get; }

    public DeleteEmployeeCommandResponse(EmployeeDto employee)
    {
        Employee = employee;
    }
}