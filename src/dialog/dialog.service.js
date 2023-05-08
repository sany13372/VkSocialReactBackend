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
exports.DialogService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const message_entity_1 = require("./entities/message.entity");
const dialog_entity_1 = require("./entities/dialog.entity");
let DialogService = class DialogService {
    constructor(MessageModel, DialogModel) {
        this.MessageModel = MessageModel;
        this.DialogModel = DialogModel;
    }
    async create(id, createDialogDto) {
    }
    async findAll() {
        return this.DialogModel.find();
    }
    async findById(id) {
    }
    async update(id) {
    }
    async remove(id) {
    }
    async sendMessage(id, updateDto) {
    }
};
DialogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(message_entity_1.MessageModel)),
    __param(1, (0, nestjs_typegoose_1.InjectModel)(dialog_entity_1.DialogModel)),
    __metadata("design:paramtypes", [Object, Object])
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map