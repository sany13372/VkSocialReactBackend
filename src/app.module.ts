import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {getMongoBdConfig} from './config/mongoconfig';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypegooseModule} from "nestjs-typegoose";
import {UserModule} from "./user/user.module";
import {DialogModule} from "./dialog/dialog.module";
import {AuthModule} from "./auth/auth.module";
import {PostModule} from "./post/post.module";
import {LikesModule} from "./likes/likes.module";
import {FileModule} from "./file/file.module";
import {MulterModule} from "@nestjs/platform-express";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot(
            {
                rootPath: path.join(__dirname, '..','uploads/default'),
            }
        ),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoBdConfig,
        }),
        UserModule,
        AuthModule,
        DialogModule,
        PostModule,
        LikesModule,
        FileModule,
        MulterModule.register({
            dest: './files',
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}