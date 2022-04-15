namespace HumanResources.Services.Employees.Domain.Entities;

public class Employee : EntityBase
{
    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? PersonalIdNumber { get; set; }

    public DateTime? Birthdate { get; set; }
}