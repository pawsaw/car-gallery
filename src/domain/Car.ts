import { ImageUrl } from './ImageUrl';

export interface Car {
    id: number;
    title: string;
    description: string;
    imageUrls: ImageUrl[];
}
