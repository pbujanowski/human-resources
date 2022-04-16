using HumanResources.Services.Employees.Application.Dto;
using MediatR;

namespace HumanResources.Services.Employees.Application.Commands.UpdateEmployee;

public class UpdateEmployeeCommand : IRequest<UpdateEmployeeCommandResponse>
{
    public EmployeeDto Employee { get; }

    public UpdateEmployeeCommand(EmployeeDto employee)
    {
        Employee = employee;
    }
}