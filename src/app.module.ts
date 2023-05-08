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

@Module({
    imports: [
        ConfigModule.forRoot(),
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
        FileModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}