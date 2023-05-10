import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {path} from 'app-root-path';
import {ensureDir, writeFile} from 'fs-extra';
import {FileDto} from "./file.dto";
import * as fs from "fs";
import * as uuid from 'uuid';

@Injectable()
export class FileService {
    async SaveFiles(files: any, folder: string = 'default'): Promise<FileDto[]> {
        const uploadFolder = `${path}/uploads/${folder}`
        const fileName = uuid.v4()
        await ensureDir(uploadFolder)
        console.log(files[0])
        const res: FileDto[] = await Promise.all(
            files.map(async file => {
                // await fs.rename(`/uploads/${file.fileName}`, `${file.fileName}.jpg`, function (err) {
                //     if (err) console.log('ERROR: ' + err);
                // })
                await writeFile(`${uploadFolder}/${fileName}.jpg`,file.buffer)

                return {
                    url: `/uploads/${folder}/${fileName}.jpg`,
                    name: `${file.originalname}`
                }
            })
        )

        return res
    }
}