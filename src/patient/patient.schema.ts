import { Schema } from 'mongoose';

export const PatientSchema = new Schema({
  fullName: { type: String, required: true },  // ФИО
  service: { type: String, required: true },   // Услуга
  date: { type: Date, required: true },        // Дата
  time: { type: String, required: true },      // Время
});
