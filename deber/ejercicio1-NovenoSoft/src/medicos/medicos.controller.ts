import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosDTO } from './dto/Medicos.dto';

@Controller('api/v1/medicos')
export class MedicosController {
    constructor(private readonly medicosServicio:MedicosService){}
//llamada al controlados para insertar
    @Post()
    insertar(@Body() MedicosDTO:MedicosDTO){
        return this.medicosServicio.Insertar(MedicosDTO);
    }
    @Get()
    todos(){
        return this.medicosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.medicosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() MedicosDTO:MedicosDTO){
        return this.medicosServicio.actualizar(id, MedicosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.medicosServicio.eliminar(id);
    }
}
