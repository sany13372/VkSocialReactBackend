"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogModule = void 0;
const common_1 = require("@nestjs/common");
const dialog_service_1 = require("./dialog.service");
const dialog_controller_1 = require("./dialog.controller");
const dialog_entity_1 = require("./entities/dialog.entity");
const user_service_1 = require("../user/user.service");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const message_entity_1 = require("./entities/message.entity");
let DialogModule = class DialogModule {
};
DialogModule = __decorate([
    (0, common_1.Module)({
        controllers: [dialog_controller_1.DialogController],
        providers: [dialog_service_1.DialogService, user_service_1.UserService],
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    schemaOptions: {
                        collection: 'Dialog'
                    },
                    typegooseClass: dialog_entity_1.DialogModel
                },
                {
                    schemaOptions: {
                        collection: 'Message'
                    },
                    typegooseClass: message_entity_1.MessageModel
                }
            ])]
    })
], DialogModule);
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.module.js.map