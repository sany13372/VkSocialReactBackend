import {prop, Ref} from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {MessageModel} from "./message.entity";

export interface IDialogModel extends Base{}
export class DialogModel extends TimeStamps {
    @prop()
    isRead: boolean
    @prop({ref:() => MessageModel})
    messages:Ref<MessageModel>[]
}
