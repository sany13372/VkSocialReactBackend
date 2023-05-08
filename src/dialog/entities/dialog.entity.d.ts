import { Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { MessageModel } from "./message.entity";
export interface IDialogModel extends Base {
}
export declare class DialogModel extends TimeStamps {
    isRead: boolean;
    messages: Ref<MessageModel>[];
}
