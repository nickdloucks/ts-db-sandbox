import { Express as ExpressApp } from "express";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { env } from "process";

export const collections: { games?: mongoDB.Collection } = {};

export async function connectToDatabase() {
    // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
    dotenv.config();

    // Create a new MongoDB client with the connection string from .env
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    // Connect to the cluster
    await client.connect();

    // Connect to the database with the name specified in .env
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    
    // Apply schema validation to the collection
    await applySchemaValidation(db);


    // Connect to the collection with the specific name from .env, found in the database previously specified
    const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);

    // Persist the connection to the Games collection
    collections.games = gamesCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`,
    );
}

        /**
         * dotenv.config(); pulls in the .env file so the values can be accessed when calling process.env. 
         * The .config() call is empty as we use the default location for a .env file, 
         * which is the root of the project. It then creates a new MongoDB client, 
         * passing it the connection string, including valid user credentials. T
         * hen it attempts to connect to MongoDB, the database, and the collection with the 
         * names specified in .env, persisting this to the global collection variable for access externally.
         */

