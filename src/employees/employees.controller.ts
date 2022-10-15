import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
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

  @Post('create-employee')
  async createEmployee(@Req() request: Request): Promise<EmployeeDto> {
    const response = await this.employeesService.createEmployee(request.body);
    return response.employee;
  }
}
