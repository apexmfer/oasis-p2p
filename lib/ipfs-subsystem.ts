

import {create} from 'ipfs-http-client'
import ExtensibleDB from "extensible-mongoose";

export default class IpfsSubsystem {
 

    constructor(public mongoDB:ExtensibleDB){
 
    }

    async init(){
        
        //"http://127.0.0.1:5001"
        const client = create() 

        // call Core API methods
        const { cid } = await client.add('Hello world!')

        console.log('cid',cid )
    }

}