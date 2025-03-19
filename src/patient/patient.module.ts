import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientSchema } from './patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema }]), // Подключение схемы
  ],
  controllers: [PatientController], // Регистрация контроллера
  providers: [PatientService], // Регистрация сервиса
})
export class PatientModule {}
