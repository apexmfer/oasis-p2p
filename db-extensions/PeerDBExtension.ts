
import {Mongoose, Schema, Model} from 'mongoose'
 
import ExtensibleMongoDatabase , {TableDefinition,DatabaseExtension} from 'extensible-mongoose'
 
 

 
  export interface Peer {
    publicAddress:  string,
    manifestURI:  string,
  
    connectionURI: string,  
    lastSeenAt: number
  }

 

  export const PeerSchema = new Schema<Peer>({    
    publicAddress:  { type: String, index: true, unique: true },
    manifestURI: { type: String },

    connectionURI: { type: String, required: true },
    
     
    lastSeenAt: Number 
  })
 
 

  export const PeerDefinition:TableDefinition= {tableName:'peers',schema:PeerSchema}

 

export default class PeerDBExtension extends DatabaseExtension {
 

  
    getBindableModels() : Array<TableDefinition>{

        return  [
            PeerDefinition 
        ]
    } 
    

}