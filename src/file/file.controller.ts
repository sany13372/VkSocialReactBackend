import {Body, Controller, HttpCode, Post, UploadedFile, UploadedFiles, UseInterceptors,} from '@nestjs/common';
import {FileService} from './file.service';
import {FileSystemStoredFile, FormDataRequest} from "nestjs-form-data";
import {Helper} from "./helper";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";

@Controller('files')
export class FileController {
    constructor(private readonly fileServise: FileService) {
    }


    @Post()
    @HttpCode(200)
    @UseInterceptors(
        FileInterceptor('picture'),
    )
    //@FormDataRequest({storage: FileSystemStoredFile})
    async uploadFile(@UploadedFile() file: any) {
        return this.fileServise.SaveFiles([file])
    }


//     @Post()
//     @UseInterceptors(
//         FileInterceptor('image',{
//             dest:'./uploads'
//         }),
//     )
//     async uploadedFile(@UploadedFile() file) {
//         const response = {
//             originalname: file.originalname,
//             filename: file.filename,
//         };
//         return response;
//     }
//
// }
}