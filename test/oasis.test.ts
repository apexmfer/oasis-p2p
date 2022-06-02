import { expect, should } from 'chai'
import fs from 'fs'
import path from 'path'
  
import   { Contract, Signer, Wallet } from 'ethers'
import ExtensibleMongooseDatabase from 'extensible-mongoose'
 
 
should()
  
let mongoInterface: ExtensibleMongooseDatabase
let user:Wallet 
let otherUser:Wallet
 
describe('Oasis p2p', () => {
 
  before(async () => {

    mongoInterface = new ExtensibleMongooseDatabase()
    await mongoInterface.init('oasis_test')

     
    await mongoInterface.dropDatabase()


   
    user =  Wallet.createRandom()
    otherUser =  Wallet.createRandom()
    

  })
  
  it('can generate a challenge', async () => {

 
   
  })

    
 
 

})
