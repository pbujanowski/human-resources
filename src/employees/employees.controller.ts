import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dtos';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('get-all-employees')
  async getAllEmployees(@Res() res: Response) {
    const queryResponse = await this.employeesService.getAllEmployees();
    return res.json(queryResponse.employees);
  }

  @Get('get-employee-by-id/:id')
  async getEmployeeById(@Param('id') employeeId: string, @Res() res: Response) {
    const queryResponse = await this.employeesService.getEmployeeById(
      employeeId,
    );
    if (queryResponse.employee) {
      return res.json(queryResponse.employee);
    }
    return res.sendStatus(404);
  }

  @Post('create-employee')
  async createEmployee(
    @Body() employee: CreateEmployeeDto,
    @Res() res: Response,
  ) {
    const commandResponse = await this.employeesService.createEmployee(
      employee,
    );
    return res.json(commandResponse.employee);
  }

  @Put('update-employee/:id')
  async updateEmployee(
    @Param('id') employeeId: string,
    @Body() employee: UpdateEmployeeDto,
    @Res() res: Response,
  ) {
    if (employeeId !== employee.id) {
      return res.sendStatus(400);
    }
    const commandResponse = await this.employeesService.updateEmployee(
      employee,
    );
    if (commandResponse.employee) {
      return res.json(commandResponse.employee);
    }
    return res.sendStatus(404);
  }

  @Delete('delete-employee/:id')
  async deleteEmployee(@Param('id') employeeId: string, @Res() res: Response) {
    const commandResponse = await this.employeesService.deleteEmployee(
      employeeId,
    );
    if (commandResponse.employee) {
      return res.json(commandResponse.employee);
    }
    return res.sendStatus(404);
  }
}
