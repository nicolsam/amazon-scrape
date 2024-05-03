import axios from "axios";
import { Request, Response } from "express";
import jsdom from "jsdom";
import { Quote } from "../types/quote";

export async function getScrapeResult(request: Request, response: Response) {

    const productsList: Quote[] = [];

    // Fetching data
    const axiosResponse = await axios.get(`https://quotes.toscrape.com/`);
    const html = new jsdom.JSDOM(axiosResponse.data);
    
    const quotes = html.window.document.querySelectorAll('.quote')

    quotes.forEach(quoteElement => {

        const quoteContainer = quoteElement.querySelector('.text');
        const quote: string = quoteContainer?.textContent ? quoteContainer.textContent : "";
        
        const authorContainer = quoteElement.querySelector('.author');
        const author: string = authorContainer?.textContent ? authorContainer.textContent : "";

        const tagsContainer = quoteElement?.querySelectorAll('.tag');
        
        const tags: string[] = [];

        tagsContainer.forEach((tag) => {
            tags.push(tag?.textContent ? tag.textContent : "")
        })

        productsList.push({
            quote,
            author,
            tags
        })
    })

    response.send(productsList);
}   