import {Body, Controller, HttpCode, Post,} from '@nestjs/common';
import {FileService} from './file.service';
import {FileSystemStoredFile, FormDataRequest} from "nestjs-form-data";

@Controller('files')
export class FileController {
    constructor(private readonly fileServise:FileService){}


    @Post()
    @HttpCode(200)
    // @UseInterceptors(
    //     FileInterceptor('picture', {
    //         storage: diskStorage({
    //             destination: Helper.destinationPath,
    //             filename: Helper.customFileName,
    //         }),
    //     }),
    // )
    //@FormDataRequest({storage: FileSystemStoredFile})
    async uploadFile(@Body() file: any){
        console.log(file)
       //return this.fileServise.SaveFiles([file],folder)
    }
}