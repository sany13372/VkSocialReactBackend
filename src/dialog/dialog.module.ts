import {Module} from '@nestjs/common';
import {DialogService} from './dialog.service';
import {DialogController} from './dialog.controller';
import {DialogModel} from "./entities/dialog.entity";
import {UserService} from "../user/user.service";
import {TypegooseModule} from "nestjs-typegoose";
import {MessageModel} from "./entities/message.entity";

@Module({
    controllers: [DialogController],
    providers: [DialogService],
    imports: [TypegooseModule.forFeature([
        {
            schemaOptions: {
                collection: 'Dialog'
            },
            typegooseClass: DialogModel
        },
        {
            schemaOptions: {
                collection: 'Message'
            },
            typegooseClass: MessageModel
        }
    ])]
})
export class DialogModule {
}
