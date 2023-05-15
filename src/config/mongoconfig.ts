import { TypegooseModuleOptions } from 'nestjs-typegoose'
import * as process from "process";

export const getMongoBdConfig =  async ():Promise<TypegooseModuleOptions> => ({
    uri:process.env.MONGO_URL
})