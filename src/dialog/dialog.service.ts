import {Injectable} from '@nestjs/common';
import {CreateDialogDto, SendMessageDto} from './dto/create-dialog.dto';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {MessageModel} from "./entities/message.entity";
import {DialogModel} from "./entities/dialog.entity";

@Injectable()
export class DialogService {
    constructor(
        @InjectModel(MessageModel) private readonly MessageModel:ModelType<MessageModel>,
        @InjectModel(DialogModel) private readonly DialogModel:ModelType<DialogModel>,
    ) {
    }

    async create(id: string, createDialogDto: CreateDialogDto) {
       // const findUser = await this.userServices.findOne(id)
       //  const message = await this.messageRepository.save({
       //      message: createDialogDto.message,
       //      userId: id,
       //      isRead: false
       //  })
       //  // const saveMessage = await this.messageRepository.save({message:createDialogDto.message})
       //  const dialog = await this.dialogRepository.save({
       //   //   user: findUser,
       //      isRead: false,
       //      messages: [message]
       //  })
        //return dialog
    }

    async findAll() {
        // return await this.dialogRepository.find({
        //     relations: ['user', 'messages']
        // });
        return this.DialogModel.find()
    }

    async findById(id: string) {
        // return await this.dialogRepository.findOne({
        //     where: {id: id},
        //     relations: ['messages']
        // });
    }

    async update(id: string) {
        //
        // const dialog = await this.dialogRepository.findOne({where: {id: id}, relations: ['messages']})
        //
        // //if(user && String(id) !== String(user.id)) throw new NotFoundException('Емэил занят');
        //
        // dialog.isRead = true
        //
        // const saveDialog = await this.dialogRepository.save(dialog)
        //
        // return saveDialog
    }

    async remove(id: string) {
        // const {messages} = await this.dialogRepository.findOne({where: {id: id}})
        // if (messages) {
        //     for (let i = 0; i < messages?.length; i++) {
        //         await this.messageRepository.delete(messages[i].id)
        //     }
        // }
        // return this.dialogRepository.delete(id)
    }

    async sendMessage(id: string, updateDto: SendMessageDto) {
        // const dialog = await this.findById(id)
        // const message = await this.messageRepository.save({
        //     message: updateDto.message,
        //     userId: updateDto.userId,
        //     isRead: false
        // })
        //
        // dialog.messages.push(message)
        // dialog.isRead = false
        // return this.dialogRepository.save(dialog)
    }
}
