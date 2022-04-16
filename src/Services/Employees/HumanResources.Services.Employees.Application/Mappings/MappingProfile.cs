using AutoMapper;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Domain.Entities;

namespace HumanResources.Services.Employees.Application.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Employee, EmployeeDto>();
        CreateMap<EmployeeDto, Employee>();
        CreateMap<CreateEmployeeDto, EmployeeDto>();
        CreateMap<CreateEmployeeDto, Employee>();
    }
}