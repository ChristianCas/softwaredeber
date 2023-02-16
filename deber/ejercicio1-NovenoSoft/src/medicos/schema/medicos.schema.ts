import mongoose from 'mongoose';

export const MedicosSchema = new mongoose.Schema({
  Cedula: { type: String, require: true },
  Nombre: { type: String, require: true },
  Apellido: { type: String, require: true },
  FechaNacimiento: { type: String, require: true },
  Email: { type: String, require: true },
},{
    timestamps:true
});

MedicosSchema.index({Cedula:1},{unique:true});
MedicosSchema.index({Email:1},{unique:true});

