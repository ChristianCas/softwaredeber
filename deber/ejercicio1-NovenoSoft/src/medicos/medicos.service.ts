import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMedicos } from 'src/common/Interfaces/Medicos.interface';
import { MEDICOS } from '../common/models/medicos.models';

import { MedicosDTO } from './dto/Medicos.dto';

@Injectable()
export class MedicosService {
  constructor(
    @InjectModel(MEDICOS.name) private readonly medicosmodelo: Model<IMedicos>,
  ) {}

  async Insertar(MedicosDTO: MedicosDTO): Promise<IMedicos> {
    return await new this.medicosmodelo(MedicosDTO).save();
  }
  async todos(): Promise<IMedicos[]> {
    return await this.medicosmodelo.find();
  }
  async uno(id: string): Promise<IMedicos> {
    return await this.medicosmodelo.findById(id);
  }

  async actualizar(id: string, medicosDTO: MedicosDTO): Promise<IMedicos> {
    return await this.medicosmodelo.findByIdAndUpdate(id, medicosDTO, {
      new: true,
    });
  }
  async eliminar(id: string) {
    await this.medicosmodelo.findByIdAndDelete(id);
    return {status: HttpStatus.OK, msg:"Se eliminó con éxito"}
  }
}
