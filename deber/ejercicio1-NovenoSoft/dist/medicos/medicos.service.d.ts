import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { IMedicos } from 'src/common/Interfaces/Medicos.interface';
import { MedicosDTO } from './dto/Medicos.dto';
export declare class MedicosService {
    private readonly medicosmodelo;
    constructor(medicosmodelo: Model<IMedicos>);
    Insertar(MedicosDTO: MedicosDTO): Promise<IMedicos>;
    todos(): Promise<IMedicos[]>;
    uno(id: string): Promise<IMedicos>;
    actualizar(id: string, medicosDTO: MedicosDTO): Promise<IMedicos>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
