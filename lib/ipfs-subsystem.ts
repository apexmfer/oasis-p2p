

import {create, globSource} from 'ipfs-http-client'
import ExtensibleDB from "extensible-mongoose";

export default class IpfsSubsystem {
 
    client 

    
    constructor(public mongoDB:ExtensibleDB){
           //"http://127.0.0.1:5001"
        this.client = create()
    }

    async init(){
        
      
       await this.publishAllCacheFiles()
    }


    async publishAllCacheFiles( ){
        

        let path = './cache'

        for await (const file of this.client.addAll(globSource(path, '**/*'))) {
            console.log(file)
        }

    }

}