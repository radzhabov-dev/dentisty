import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel('Patient') private readonly patientModel: Model<any>,
  ) {}

  async create(body: any) {
    const createdPatient = new this.patientModel(body);
    return createdPatient.save();
  }

  async findAll() {
    return this.patientModel.find().exec();
  }

  async getTimes() {
    return [
      { time: '9:00', isBusy: false },
      { time: '10:00', isBusy: false },
      { time: '11:00', isBusy: true },
      { time: '12:00', isBusy: false },
      { time: '13:00', isBusy: false },
      { time: '14:00', isBusy: false },
      { time: '15:00', isBusy: false },
      { time: '16:00', isBusy: false },
      { time: '17:00', isBusy: false },
      { time: '18:00', isBusy: false },
    ];
  }
}
