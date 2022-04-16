using HumanResources.Services.Employees.Application.Commands.CreateEmployee;
using HumanResources.Services.Employees.Application.Commands.DeleteEmployee;
using HumanResources.Services.Employees.Application.Commands.UpdateEmployee;
using HumanResources.Services.Employees.Application.Dto;
using HumanResources.Services.Employees.Application.Queries.GetAllEmployees;
using HumanResources.Services.Employees.Application.Queries.GetEmployeeById;
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

    [HttpGet("{id}")]
    public async Task<IActionResult> GetEmployeeById(Guid id)
    {
        try
        {
            var response = await _mediator.Send(new GetEmployeeByIdQuery(id));
            if (response.Employee == null)
            {
                return NotFound();
            }

            return Ok(response.Employee);
        }
        catch (Exception ex)
        {
            _logger.LogError("{message}", ex.Message);
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<IActionResult> CreateEmployee([FromBody] CreateEmployeeDto employee)
    {
        try
        {
            var response = await _mediator.Send(new CreateEmployeeCommand(employee));
            return Ok(response.Employee);
        }
        catch (Exception ex)
        {
            _logger.LogError("{message}", ex.Message);
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateEmployee(Guid id, [FromBody] EmployeeDto employee)
    {
        try
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            var found = await _mediator.Send(new GetEmployeeByIdQuery(id));
            if (found.Employee == null)
            {
                return NotFound();
            }

            var response = await _mediator.Send(new UpdateEmployeeCommand(employee));
            return Ok(response.Employee);
        }
        catch (Exception ex)
        {
            _logger.LogError("{message}", ex.Message);
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEmployee(Guid id)
    {
        try
        {
            var found = await _mediator.Send(new GetEmployeeByIdQuery(id));
            if (found.Employee != null)
            {
                var response = await _mediator.Send(new DeleteEmployeeCommand(found.Employee));
                return Ok(response.Employee);
            }

            return NotFound();
        }
        catch (Exception ex)
        {
            _logger.LogError("{message}", ex.Message);
            return StatusCode(500);
        }
    }
}