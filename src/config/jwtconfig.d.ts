import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
export declare const getJWTConfig: (ConfigService: ConfigService<Record<string, unknown>, false>) => Promise<JwtModuleOptions>;
