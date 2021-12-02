// External dependencies

import { ObjectId } from "mongodb";
        /**
         * ObjectId is a unique MongoDB data type which is used for 
         * the ‘_id’ field that every document has and is used as a 
         * unique identifier and acts as the primary key.
         */

// Class Implementation

export default class Game {
    constructor(public name: string, public price: number, public category: string, public id?: ObjectId) {}
}

        /**
         * Although every document in MongoDB has an id, 
         * it won’t always exist at code level, such as when you are 
         * creating a document. In this instance, the ‘_id’ field is 
         * auto-generated at creation time.
         * We now have a model of our data represented in code so that 
         * developers can take advantage of autocomplete and type checking.
         */