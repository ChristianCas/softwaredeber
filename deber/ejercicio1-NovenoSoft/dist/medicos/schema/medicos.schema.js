"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MedicosSchema = new mongoose_1.default.Schema({
    Cedula: { type: String, require: true },
    Nombre: { type: String, require: true },
    Apellido: { type: String, require: true },
    FechaNacimiento: { type: String, require: true },
    Email: { type: String, require: true },
}, {
    timestamps: true
});
exports.MedicosSchema.index({ Cedula: 1 }, { unique: true });
exports.MedicosSchema.index({ Email: 1 }, { unique: true });
//# sourceMappingURL=medicos.schema.js.map