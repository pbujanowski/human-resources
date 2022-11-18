import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationGuard } from 'src/authentication';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto';
import { EmployeeService } from './employee.service';

@Controller('employees')
@UseGuards(AuthenticationGuard)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('get-all-employees')
  async getAllEmployees(@Res() res: Response) {
    const queryResponse = await this.employeeService.getAllEmployees();
    return res.json(queryResponse.employees);
  }

  @Get('get-employee-by-id/:id')
  async getEmployeeById(@Param('id') employeeId: string, @Res() res: Response) {
    const queryResponse = await this.employeeService.getEmployeeById(
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
    const commandResponse = await this.employeeService.createEmployee(employee);
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
    const commandResponse = await this.employeeService.updateEmployee(employee);
    if (commandResponse.employee) {
      return res.json(commandResponse.employee);
    }
    return res.sendStatus(404);
  }

  @Delete('delete-employee/:id')
  async deleteEmployee(@Param('id') employeeId: string, @Res() res: Response) {
    const commandResponse = await this.employeeService.deleteEmployee(
      employeeId,
    );
    if (commandResponse.employee) {
      return res.json(commandResponse.employee);
    }
    return res.sendStatus(404);
  }
}
