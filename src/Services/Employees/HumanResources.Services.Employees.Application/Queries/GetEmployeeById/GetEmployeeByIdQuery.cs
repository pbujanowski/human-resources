using MediatR;

namespace HumanResources.Services.Employees.Application.Queries.GetEmployeeById;

public class GetEmployeeByIdQuery : IRequest<GetEmployeeByIdQueryResponse>
{
    public Guid EmployeeId { get; }

    public GetEmployeeByIdQuery(Guid employeeId)
    {
        EmployeeId = employeeId;
    }
}