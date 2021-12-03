// External Dependencies

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game from "../models/game";

// Global Config

export const gamesRouter = express.Router();

gamesRouter.use(express.json());

        /**
         * We have to tell our router to use the json parser middleware built into Express, 
         * which is why we call use(express.json());.
         */

// GET

gamesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const games = (await collections.games.find({}).toArray()) as Game[];

        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

gamesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const game = (await collections.games.findOne(query)) as Game;

        if (game) {
            res.status(200).send(game);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

// POST

gamesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newGame = req.body as Game;
        const result = await collections.games.insertOne(newGame);

        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

// PUT

// DELETE