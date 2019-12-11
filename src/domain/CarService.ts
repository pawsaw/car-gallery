import { Car } from './Car';
import api from '../api/api';
import { ImageUrl } from './ImageUrl';
import CarResponse from '../api/CarResponse';
import domain from './domain';

export interface CarServiceError {
    status: number;
    message: string;
}

export function isCarServiceError(e: any): e is CarServiceError {
    return (e.static && e.message);
}

export default class CarService {

    async findAllCars(): Promise<Car[]> {
        try {
            const carsResponse = await api.car.findAll();
            const cars = carsResponse.map(CarService.toCar);
            return cars;
        } catch (error) {
            return Promise.reject({ ...error } as CarServiceError);
        }
    }

    async findCarById(id: number): Promise<Car> {
        try {
            const carResponse = await api.car.findById(id);
            const car = CarService.toCar(carResponse);
            return car;
        } catch (error) {
            return Promise.reject({ ...error } as CarServiceError);
        }
    }

    private static toCar({ images, id, title, description }: CarResponse): Car {
        const imageUrls: ImageUrl[] = images.map(domain.imageUrl.imageUrl);
        return {
            id,
            title,
            description,
            imageUrls
        } as Car;
    }
};
