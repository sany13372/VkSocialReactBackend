import { Injectable } from '@nestjs/common';
import {path} from 'app-root-path';
import {ensureDir,writeFile} from 'fs-extra';
import {FileDto} from "./file.dto";
@Injectable()
export class FileService {
    async SaveFiles(files:any,folder:string='default'):Promise<FileDto[]>{
        const uploadFolder = `${path}/uploads/${folder}`

        await ensureDir(uploadFolder)
        console.log(files)
        const res:FileDto[] = await Promise.all(
            files.map(async file => {
               // await writeFile(`${uploadFolder}/${file.originalname}`,file.buffer)

                return{
                    url:`/uploads/${folder}/${file.originalname}`,
                    name:`${file.originalname}`
                }
            })
        )

        return res
    }
}