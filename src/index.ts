import express, { Request, Response } from "express";

const app = express();

const PORT = 3000;

app.get('/api/search', (request: Request, response: Response, next) => {
    response.send([])
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})