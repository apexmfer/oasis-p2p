


import ExtensibleDB from "extensible-mongoose";
 



/*
    Read the manifest 
    Reach out to the root nodes to build out a collection of more nodes in this mesh network 

    Download all of the files in the manifest using IPFS 

*/




export interface OasisManifest {
    oasisName: string,
    rootNodes: any[],

    validFileTypes: string[],
    maxFileSizeBytes: string,
    trackedFiles: any[]
}




export default class OasisServer {
    
    

    constructor(public oasisManifest:OasisManifest,  public mongoDB:ExtensibleDB){
 
    }

    async init(){
        

    }

}