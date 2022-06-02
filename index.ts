
 

import ExtensibleDB from "extensible-mongoose";

let envmode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
 
 
async function start(){

  let mongoDB = new ExtensibleDB()
  await mongoDB.init( 'oasisp2p_'.concat(envmode) )


  let ipfsSubsystem = new IpfsSubsystem( mongoDB )

  
  let peerServer = new PeerServer( ipfsSubsystem, mongoDB )
  await peerServer.init() 




}


start()