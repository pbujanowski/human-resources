using AutoMapper;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Application.Wrappers;
using MediatR;

namespace HumanResources.Services.Employees.Application.Queries.GetEmployeeById;

public class GetEmployeeByIdQueryHandler : IRequestHandler<GetEmployeeByIdQuery, GetEmployeeByIdQueryResponse>
{
    private readonly IMapper _mapper;
    private readonly IRepositoryWrapper _repositories;

    public GetEmployeeByIdQueryHandler(IMapper mapper, IRepositoryWrapper repositories)
    {
        _mapper = mapper;
        _repositories = repositories;
    }

    public async Task<GetEmployeeByIdQueryResponse> Handle(GetEmployeeByIdQuery request, CancellationToken cancellationToken)
    {
        var employeeEntity = await _repositories.Employees.FindByIdAsync(request.EmployeeId);
        var employeeDto = _mapper.Map<EmployeeDto>(employeeEntity);
        return new GetEmployeeByIdQueryResponse(employeeDto);
    }
}