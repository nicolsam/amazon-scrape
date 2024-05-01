import express from "express";
import scrapeRouter from "./routes/scrape";

const app = express();

app.use('/api/scrape', scrapeRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})