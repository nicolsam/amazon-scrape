import { Router } from "express";
import { getScrapeResult } from "../handlers/scrape";

const router = Router();

router.get('/', getScrapeResult);

export default router;