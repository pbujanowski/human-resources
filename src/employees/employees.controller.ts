import { Controller, Get } from '@nestjs/common';
import { EmployeeDto } from './dtos';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('get-all-employees')
  async getAllEmployees(): Promise<EmployeeDto[]> {
    const response = await this.employeesService.getAllEmployees();
    return response.employees;
  }
}
