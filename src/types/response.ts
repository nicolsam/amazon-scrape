export interface Response {
    title: string;
    image: string;
    customerReviews: customerReview[];
}

interface customerReview {
    count: number;
    starRating: string;
}