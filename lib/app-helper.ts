 
 


const NODE_ENV = process.env.NODE_ENV

let manifestData = require('./package.json')
let serverConfig = require('./config/server-config.json')

export interface ServerConfig {

  oasisServerPort: number,
  connectionURL: string,
  ethereumPublicAddress: string 

}

export default class AppHelper  {

  static getEnvironmentName() : string{
    let envName = NODE_ENV ? NODE_ENV : 'development'

    return envName
  }

  
  static getAppVersion() : string{
   
    return manifestData.version
  }

  static getServerConfig() : ServerConfig {
   
    return serverConfig
  }
        
      
}