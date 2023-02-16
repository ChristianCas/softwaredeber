"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicosController = void 0;
const common_1 = require("@nestjs/common");
const medicos_service_1 = require("./medicos.service");
const Medicos_dto_1 = require("./dto/Medicos.dto");
let MedicosController = class MedicosController {
    constructor(medicosServicio) {
        this.medicosServicio = medicosServicio;
    }
    insertar(MedicosDTO) {
        return this.medicosServicio.Insertar(MedicosDTO);
    }
    todos() {
        return this.medicosServicio.todos();
    }
    uno(id) {
        return this.medicosServicio.uno(id);
    }
    actualizar(id, MedicosDTO) {
        return this.medicosServicio.actualizar(id, MedicosDTO);
    }
    eliminar(id) {
        return this.medicosServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Medicos_dto_1.MedicosDTO]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "insertar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "todos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "uno", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Medicos_dto_1.MedicosDTO]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "eliminar", null);
MedicosController = __decorate([
    (0, common_1.Controller)('api/v1/medicos'),
    __metadata("design:paramtypes", [medicos_service_1.MedicosService])
], MedicosController);
exports.MedicosController = MedicosController;
//# sourceMappingURL=medicos.controller.js.map