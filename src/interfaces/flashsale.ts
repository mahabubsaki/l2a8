export default interface IFlashSale {
    name: string;
    category: string;
    id: number;
    brand: string;
    description: string;
    price: number;
    discounted_price: number;
    size: string;
    scent: string;
    ingredients: string[];
    rating: number;
    reviews: number;
    image_url: string;
}