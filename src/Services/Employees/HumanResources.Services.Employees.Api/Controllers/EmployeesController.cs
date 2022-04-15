using HumanResources.Services.Employees.Application.Queries.GetAllEmployees;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HumanResources.Services.Employees.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EmployeesController : ControllerBase
{
    private readonly ILogger<EmployeesController> _logger;
    private readonly IMediator _mediator;

    public EmployeesController(ILogger<EmployeesController> logger, IMediator mediator)
    {
        _logger = logger;
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllEmployees()
    {
        try
        {
            var response = await _mediator.Send(new GetAllEmployeesQuery());
            return Ok(response.Employees);
        }
        catch (Exception ex)
        {
            _logger.LogError("{message}", ex.Message);
            return StatusCode(500);
        }
    }
}