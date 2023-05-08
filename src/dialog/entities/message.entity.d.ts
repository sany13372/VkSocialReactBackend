import { DialogModel } from "./dialog.entity";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Ref } from "@typegoose/typegoose";
export interface IMessageModel extends Base {
}
export declare class MessageModel extends TimeStamps {
    message: string;
    userId: string;
    isRead: boolean;
    messages: Ref<MessageModel>[];
    dialogs: Ref<DialogModel>[];
}
