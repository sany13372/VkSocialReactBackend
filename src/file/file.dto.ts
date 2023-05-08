import {FileSystemStoredFile, HasMimeType, IsFiles, MaxFileSize} from "nestjs-form-data";

export interface FileDto{
    url:string
    name:string
}

export class FormDataTestDto {

    @IsFiles()
    @MaxFileSize(1e6, { each: true })
    @HasMimeType(['image/jpeg', 'image/png'], { each: true })
    avatars: FileSystemStoredFile[];

}