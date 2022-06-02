import { ControllerMethod } from 'degen-route-loader'
import ExtensibleDB, { TableDefinition } from 'extensible-mongoose'
import AppHelper from '../lib/app-helper'
import APIController from './APIController'
 

export interface ServerMetadata {

    appVersion: string,
    connectionURL: string, 
    publicAddress: string 

}

export default class PeerController extends APIController {

    
    constructor(mongoDB:ExtensibleDB){
         super(mongoDB)

         
    }


    getServerMetadata: ControllerMethod = async (req: any) => { 

        return {success:true, data: PeerController.buildServerMetadata()}
    }


    static buildServerMetadata():ServerMetadata {
        
        return {

            appVersion: AppHelper.getAppVersion(),
            connectionURL: AppHelper.getServerConfig().connectionURL,
            publicAddress: AppHelper.getServerConfig().ethereumPublicAddress
        }

    
    }

   

}