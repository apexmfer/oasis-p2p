


import ExtensibleDB from "extensible-mongoose";
import IpfsSubsystem from "./ipfs-subsystem";

export default class PeerServer {
 

    constructor(public ipfsSubsystem: IpfsSubsystem, public mongoDB:ExtensibleDB){
 
    }

    async init(){
        

    }

}