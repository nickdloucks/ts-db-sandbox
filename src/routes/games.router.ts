// External Dependencies

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game from "../models/game";

// Global Config

export const gamesRouter = express.Router();

gamesRouter.use(express.json());

// GET

// POST

// PUT

// DELETE