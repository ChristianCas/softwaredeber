import { MedicosService } from './medicos.service';
import { MedicosDTO } from './dto/Medicos.dto';
export declare class MedicosController {
    private readonly medicosServicio;
    constructor(medicosServicio: MedicosService);
    insertar(MedicosDTO: MedicosDTO): Promise<import("../common/Interfaces/Medicos.interface").IMedicos>;
    todos(): Promise<import("../common/Interfaces/Medicos.interface").IMedicos[]>;
    uno(id: string): Promise<import("../common/Interfaces/Medicos.interface").IMedicos>;
    actualizar(id: string, MedicosDTO: MedicosDTO): Promise<import("../common/Interfaces/Medicos.interface").IMedicos>;
    eliminar(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
