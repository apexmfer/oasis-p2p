
 
 import express from 'express'
 
 import cors from 'cors'
 const formidable = require('express-formidable')
 
// @ts-ignore
import  history from 'connect-history-api-fallback'
 
 

import DegenRouteLoader, { Route } from 'degen-route-loader'
 

import APIController from '../controllers/APIController'



let envmode = process.env.NODE_ENV


export default class WebServer  {



    //server:https.Server|http.Server

    
    app:any

    apiPort:number

    degenRouteLoader:DegenRouteLoader

    appListener: any

    constructor(
      
      public serverConfig:any,
      public routes:Array<Route>, 

      public apiControllers: Array<{name:string, controller: APIController}>
      ){
       
        this.app = express()

        this.degenRouteLoader = new DegenRouteLoader()

        this.apiPort = this.serverConfig.port? this.serverConfig.port : 3000

        
 
        this.app.use(cors());


        let formidableOptions= {  }

        this.app.use(formidable(formidableOptions))
   
  
    }


    async init(    ){
      

      //Load all of the api controllers similar to rails 
      this.apiControllers.map( controllerData => { 
        
        this.degenRouteLoader.registerController( controllerData.name, controllerData.controller)
 
      })  

      this.degenRouteLoader.loadRoutes( this.app, this.routes )
 
      
     
 
      //host static files from dist for webpage 
      const staticFileMiddleware = express.static('dist');
      this.app.use(staticFileMiddleware);
      this.app.use(history({
        disableDotRule: true,
        verbose: true
      }));
      this.app.use(staticFileMiddleware);

      


      this.appListener = this.app.listen(this.apiPort, () => {
        console.log(`API Server listening at http://localhost:${this.apiPort}`)
      })


 

    }


    async stop(    ){
      if(this.appListener){
        this.appListener.close()
      }
      


    }
 

}