export class Product {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    isLiked: boolean;

    constructor(
    id: string,
        title: string,
        description: string,
        imageUrl: string,
        price: number,
        isLiked: boolean
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.imageUrl = imageUrl
        this.price = price
        this.isLiked = isLiked
    }
}
