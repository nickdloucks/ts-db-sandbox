// index.ts
import express from "express";
import { connectToDatabase } from "./services/database.service"
import { gamesRouter } from "./routes/games.router";

console.log("Random number (1 - 100): ", randomNumber());