import CarService from './CarService';
import ImageUrlService from './ImageUrlService';

const car = new CarService();
const imageUrl = new ImageUrlService();

const domain = {
    car,
    imageUrl
};

export default domain;
