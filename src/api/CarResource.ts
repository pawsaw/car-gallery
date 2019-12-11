import CarResponse from './CarResponse';

const RESOURCE_BASE_URL = 'https://www.mobile.de/hiring-challenge.json';

export interface CarResourceError {
    status: number;
    message: string;
}

export default class CarResource {

    async findAll(): Promise<CarResponse[]> {
        const response = await fetch(RESOURCE_BASE_URL);
        if (response.status !== 200) {
            const error: CarResourceError = {
                status: response.status,
                message: `Couldn't find car collection.`
            };
            return Promise.reject(error);
        }
        const carResponse: CarResponse = await response.json();
        
        // we don't have a real endpoint returning a collection of cars here: somehow mocked!
        return [ carResponse, carResponse, carResponse, carResponse, carResponse, carResponse ];
    }

    async findById(id: number): Promise<CarResponse> {
        // // we don't have a real endpoint returning a particular car by Id: somehow mocked!
        const response = await fetch(RESOURCE_BASE_URL);
        if (response.status !== 200) {
            const error: CarResourceError = {
                status: response.status,
                message: `Couldn't find car with ID ${id}.`
            };
            return Promise.reject(error);
        }
        return response.json();
    }
}
