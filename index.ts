
 

import ExtensibleDB, { DatabaseExtension } from "extensible-mongoose";
import PeerDBExtension from "./db-extensions/PeerDBExtension";
import IpfsSubsystem from "./lib/ipfs-subsystem";
 
import { Route } from "degen-route-loader";
import WebServer from "./lib/web-server";
import PeerController from "./controllers/PeerController";
import OasisServer from "./lib/oasis-server";


let envmode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
 
const routes:Array<Route> = require('./shared/routes.json')
  
const serverConfig = require('./config/server-config.json')


const oasisManifest = require('./config/oasis-manifest.json')
 
async function start(){

  let mongoDB = new ExtensibleDB()
  await mongoDB.init( 'oasisp2p_'.concat(envmode) )

  let dbExtensions:Array<DatabaseExtension> = []
    
  dbExtensions.push(...[
    new PeerDBExtension(mongoDB),    
  ])

  dbExtensions.map(ext => ext.bindModelsToDatabase())
  


  let ipfsSubsystem = new IpfsSubsystem( mongoDB )
  await ipfsSubsystem.init()



 
  
  let oasisServer = new OasisServer( oasisManifest, ipfsSubsystem ,  mongoDB )
  await oasisServer.init() 


 

  let apiControllers = [
    {name:'peer', controller: new PeerController(mongoDB)}, 
  ]



  let config = {
    port: serverConfig.oasisServerPort
  }

  let webServer = new WebServer( config, routes, apiControllers )
  await webServer.init() 




}


start()