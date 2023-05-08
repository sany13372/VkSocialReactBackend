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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const dialog_entity_1 = require("./dialog.entity");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const typegoose_1 = require("@typegoose/typegoose");
class MessageModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], MessageModel.prototype, "message", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], MessageModel.prototype, "userId", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], MessageModel.prototype, "isRead", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => MessageModel }),
    __metadata("design:type", Array)
], MessageModel.prototype, "messages", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => dialog_entity_1.DialogModel }),
    __metadata("design:type", Array)
], MessageModel.prototype, "dialogs", void 0);
exports.MessageModel = MessageModel;
//# sourceMappingURL=message.entity.js.map