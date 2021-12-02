// External Dependencies

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { games?: mongoDB.Collection } = {} // CHANGE TO MY COLLECTION
    //access collection outside the service

// Initialize Connection to the database

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);
 
  collections.games = gamesCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
 }

        /**
         * dotenv.config(); pulls in the .env file so the values can be accessed when calling process.env. 
         * The .config() call is empty as we use the default location for a .env file, 
         * which is the root of the project. It then creates a new MongoDB client, 
         * passing it the connection string, including valid user credentials. T
         * hen it attempts to connect to MongoDB, the database, and the collection with the 
         * names specified in .env, persisting this to the global collection variable for access externally.
         */