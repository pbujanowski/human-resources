using AutoMapper;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Application.Wrappers;
using HumanResources.Services.Employees.Domain.Entities;
using MediatR;

namespace HumanResources.Services.Employees.Application.Commands.UpdateEmployee;

public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand, UpdateEmployeeCommandResponse>
{
    private readonly IMapper _mapper;
    private readonly IRepositoryWrapper _repositories;

    public UpdateEmployeeCommandHandler(IMapper mapper, IRepositoryWrapper repositories)
    {
        _mapper = mapper;
        _repositories = repositories;
    }

    public async Task<UpdateEmployeeCommandResponse> Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var employeeEntity = _mapper.Map<Employee>(request.Employee);
        var updatedEntity = _repositories.Employees.Update(employeeEntity);
        await _repositories.SaveChangesAsync();

        var updatedDto = _mapper.Map<EmployeeDto>(updatedEntity);
        return new UpdateEmployeeCommandResponse(updatedDto);
    }
}