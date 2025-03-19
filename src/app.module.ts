import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://alimovu966:mongodb@cluster0.ep58b.mongodb.net/myDatabase?retryWrites=true&w=majority'),
    PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
