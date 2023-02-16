import { Module } from '@nestjs/common';
import { MedicosController } from './medicos.controller';
import { MedicosService } from './medicos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MEDICOS } from '../common/models/medicos.models';
import { MedicosSchema } from './schema/medicos.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:MEDICOS.name,
      useFactory:()=>{
        return MedicosSchema;
      }
    }])
  ],
  controllers: [MedicosController],
  providers: [MedicosService]
})
export class MedicosModule {}
