import { Router } from "express";
import { createPoll, getPoll, createChoice, getChoices, newVote, getResult } from "../controllers/controllers.js";

const router = Router();

router.post("/poll", createPoll);
router.get("/poll", getPoll);
router.post("/choice", createChoice);
router.get("/poll/:id/choice", getChoices); 
router.post("/choice/:id/vote", newVote); 
router.get("/poll/:id/result", getResult);

export default router;