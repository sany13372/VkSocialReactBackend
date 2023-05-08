import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoBdConfig =  async ():Promise<TypegooseModuleOptions> => ({
    uri:'mongodb://localhost:27017'
})