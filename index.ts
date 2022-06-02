
 

import ExtensibleDB from "extensible-mongoose";
import IpfsSubsystem from "./lib/ipfs-subsystem";
import PeerServer from "./lib/peer-server";

let envmode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
 
 
async function start(){

  let mongoDB = new ExtensibleDB()
  await mongoDB.init( 'oasisp2p_'.concat(envmode) )


  let ipfsSubsystem = new IpfsSubsystem( mongoDB )
  await ipfsSubsystem.init()

  
  let peerServer = new PeerServer( ipfsSubsystem, mongoDB )
  await peerServer.init() 




}


start()