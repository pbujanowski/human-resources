using HumanResources.Services.Employees.Application.Dto;
using MediatR;

namespace HumanResources.Services.Employees.Application.Commands.CreateEmployee;

public class CreateEmployeeCommand : IRequest<CreateEmployeeCommandResponse>
{
    public CreateEmployeeDto Employee { get; }

    public CreateEmployeeCommand(CreateEmployeeDto employee)
    {
        Employee = employee;
    }
}