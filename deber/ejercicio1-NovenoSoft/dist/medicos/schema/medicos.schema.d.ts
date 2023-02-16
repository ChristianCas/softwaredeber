import mongoose from 'mongoose';
export declare const MedicosSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    Cedula?: string;
    Nombre?: string;
    Apellido?: string;
    FechaNacimiento?: string;
    Email?: string;
}>;
