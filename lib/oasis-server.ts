


import ExtensibleDB from "extensible-mongoose";
import IpfsSubsystem from "./ipfs-subsystem";
import SingletonLoopMethod from "./singleton-loop-method";
 



/*
    Read the manifest 
    Reach out to the root nodes to build out a collection of more nodes in this mesh network 

    Download all of the files in the manifest using IPFS 

*/
var cron = require('node-cron');



export interface OasisManifest {
    oasisName: string,
    rootNodes: any[],

    validFileTypes: string[],
    maxFileSizeBytes: string,
    trackedFiles: any[]
}


export interface TrackableFile {
    cidPath: string ,
    fileName?: string,
    expectedExtension?: string
   

}

export default class OasisServer {
    


    constructor(
        public oasisManifest:OasisManifest,
        public ipfsSubsystem:IpfsSubsystem,
        public mongoDB:ExtensibleDB
    ){}

    async init(){

       let fetchFilesLoop = new SingletonLoopMethod( this.fetchTrackedFiles, 5000 );

    }

    async fetchTrackedFiles(){

        let filesArray = this.oasisManifest.trackedFiles

        await this.ipfsSubsystem.fetchFiles( filesArray )

    }

}