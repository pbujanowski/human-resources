using HumanResources.Services.Employees.Application.Dto;
using MediatR;

namespace HumanResources.Services.Employees.Application.Commands.DeleteEmployee;

public class DeleteEmployeeCommand : IRequest<DeleteEmployeeCommandResponse>
{
    public EmployeeDto Employee { get; }

    public DeleteEmployeeCommand(EmployeeDto employee)
    {
        Employee = employee;
    }
}