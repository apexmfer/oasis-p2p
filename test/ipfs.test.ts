import { expect, should } from 'chai'
import fs from 'fs'
import path from 'path'
  
import   { Contract, Signer, Wallet } from 'ethers'
import ExtensibleMongooseDatabase from 'extensible-mongoose'
import IpfsSubsystem from '../lib/ipfs-subsystem'
import { TrackableFile } from '../lib/oasis-server'
 
 
should()
 
let mongoDB: ExtensibleMongooseDatabase
let ipfsSubsystem :IpfsSubsystem


describe('Oasis p2p', () => {
 
  before(async () => {

    mongoDB = new ExtensibleMongooseDatabase()
    await mongoDB.init('oasis_test')
 
    await mongoDB.dropDatabase()

    ipfsSubsystem = new IpfsSubsystem(mongoDB)
    

  })
  
  it('can check for cached file', async () => {

    let file:TrackableFile = {
        cidPath: 'flyz1'
    }

    let hasFile = IpfsSubsystem.hasFileCached(file)
    
    expect(hasFile).to.eql(true)
  })

  it('can download file', async () => {

    let file:TrackableFile = {
        cidPath: 'QmcvgYQtwErvV5C27ozRahqDQwjruU9VpbMwULkBaPoC9X'
    }

    await ipfsSubsystem.downloadFileFromIPFS(file)

    let hasFile = IpfsSubsystem.hasFileCached(file)
    
    expect(hasFile).to.eql(true)
  })

    
 
 

})
