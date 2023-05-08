import {DialogModel} from "./dialog.entity";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop, Ref} from "@typegoose/typegoose";

export interface IMessageModel extends Base{}
export class MessageModel extends TimeStamps {
    @prop()
    message: string
    @prop()
    userId: string
    @prop()
    isRead: boolean
    @prop({ref:() => MessageModel})
    messages:Ref<MessageModel>[]
    @prop({ref:() => DialogModel})
    dialogs:Ref<DialogModel>[]
}
