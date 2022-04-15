using AutoMapper;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Application.Wrappers;
using MediatR;

namespace HumanResources.Services.Employees.Application.Queries.GetAllEmployees;

public class GetAllEmployeesQueryHandler : IRequestHandler<GetAllEmployeesQuery, GetAllEmployeesQueryResponse>
{
    private readonly IMapper _mapper;
    private readonly IRepositoryWrapper _repositories;

    public GetAllEmployeesQueryHandler(IMapper mapper, IRepositoryWrapper repositories)
    {
        _mapper = mapper;
        _repositories = repositories;
    }

    public async Task<GetAllEmployeesQueryResponse> Handle(GetAllEmployeesQuery request, CancellationToken cancellationToken)
    {
        await Task.CompletedTask;

        var employeesEntity = _repositories.Employees.FindAll().ToList();
        var employeesDto = _mapper.Map<ICollection<EmployeeDto>>(employeesEntity);

        return new GetAllEmployeesQueryResponse(employeesDto);
    }
}