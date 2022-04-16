namespace HumanResources.Services.Employees.Application.Dto;

public class CreateEmployeeDto
{
    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? PersonalIdNumber { get; set; }

    public DateTime? Birthdate { get; set; }
}