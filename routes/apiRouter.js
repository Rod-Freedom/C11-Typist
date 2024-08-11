import { Router } from "express";

const api = Router();

export default api;

import notesRouter from "./notes.js";

api.use('/notes', notesRouter);