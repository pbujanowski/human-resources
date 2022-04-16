using AutoMapper;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Application.Wrappers;
using HumanResources.Services.Employees.Domain.Entities;
using MediatR;

namespace HumanResources.Services.Employees.Application.Commands.CreateEmployee;

public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, CreateEmployeeCommandResponse>
{
    private readonly IMapper _mapper;
    private readonly IRepositoryWrapper _repositories;

    public CreateEmployeeCommandHandler(IMapper mapper, IRepositoryWrapper repositories)
    {
        _mapper = mapper;
        _repositories = repositories;
    }

    public async Task<CreateEmployeeCommandResponse> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var employeeEntity = _mapper.Map<Employee>(request.Employee);
        var createdEntity = _repositories.Employees.Create(employeeEntity);
        await _repositories.SaveChangesAsync();

        var createdDto = _mapper.Map<EmployeeDto>(createdEntity);
        return new CreateEmployeeCommandResponse(createdDto);
    }
}