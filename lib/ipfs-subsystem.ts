

import {create, globSource} from 'ipfs-http-client'
import ExtensibleDB from "extensible-mongoose";
import { TrackableFile } from './oasis-server';
import fs from 'fs'
import path from 'path'
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


    async fetchFiles( filesArray: TrackableFile[] ){
        for(let file of filesArray){
            let expectedFileName = file.cidPath

            if(!IpfsSubsystem.hasFileCached(file)){

                let success = await this.downloadFileFromIPFS( file )

            }

        }

    }



    static hasFileCached(file:TrackableFile) {
        let allCacheFiles = fs.readdirSync('./cache')
        for(let fileName of allCacheFiles){
            console.log('file',file)
            let fileNameRaw = fileName.split('.')[0]

            if(file.cidPath 
            && fileNameRaw 
            && file.cidPath.toLowerCase() == fileNameRaw.toLowerCase()){
                return true
            }
        } 

        return false
    }



    async downloadFileFromIPFS(file:TrackableFile) {

        let ipfsPath = file.cidPath
 
        let fetchedFileIterable = this.client.cat(ipfsPath, {})  

        let extension = file.expectedExtension ? file.expectedExtension : 'png'  // get this somehow - metadata files ?  

        var writeStream = fs.createWriteStream(`./cache/${ipfsPath}.${extension}`);
        writeStream.on('error', function (err) {
            console.log(err);
        });
         
         
        for await (const part of fetchedFileIterable) {
            writeStream.write(part) 
        }

        writeStream.close()       
 
  
        console.log('fin'   ) 

    }



}