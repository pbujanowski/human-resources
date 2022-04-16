using AutoMapper;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Application.Wrappers;
using HumanResources.Services.Employees.Domain.Entities;
using MediatR;

namespace HumanResources.Services.Employees.Application.Commands.DeleteEmployee;

public class DeleteEmployeeCommandHandler : IRequestHandler<DeleteEmployeeCommand, DeleteEmployeeCommandResponse>
{
    private readonly IMapper _mapper;
    private readonly IRepositoryWrapper _repositories;

    public DeleteEmployeeCommandHandler(IMapper mapper, IRepositoryWrapper repositories)
    {
        _mapper = mapper;
        _repositories = repositories;
    }

    public async Task<DeleteEmployeeCommandResponse> Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
    {
        var employeeEntity = _mapper.Map<Employee>(request.Employee);
        var deletedEntity = _repositories.Employees.Delete(employeeEntity);
        await _repositories.SaveChangesAsync();

        var deletedDto = _mapper.Map<EmployeeDto>(deletedEntity);
        return new DeleteEmployeeCommandResponse(deletedDto);
    }
}