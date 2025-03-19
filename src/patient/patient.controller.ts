import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async findAll() {
    return this.patientService.findAll();
  }

  @Post()
  async create(@Body() body: any) {
    return this.patientService.create(body);
  }

  @Get('times')
  async getTimes() {
    return this.patientService.getTimes(); 
  }
}
