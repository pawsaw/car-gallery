import React from 'react';
import { Car } from '../../../domain/Car';
import { Link } from 'react-router-dom';
import { shorten } from '../../../utils/textUtils';
import CarShape from '../../shapes/CarShape';

export interface CarCollectionItemProps {
    car: Car;
}

const CarCollectionItem: React.FC<CarCollectionItemProps> = ({ car }: CarCollectionItemProps) => {

    return (
        <div className="card">
            <img
                src={car.imageUrls[0].fullsize}
                alt="The car"
                className="card-img-top p-3"/>

            <div className="card-body">
                <h5 className="card-title">{car.title}</h5>
                <p className="card-text">
                    {shorten(car.description, 80)}
                </p>
                <Link className="btn btn-link" to={`/cars/${car.id}`}>
                    Show Gallery
                </Link>
            </div>
        </div>
    );
};

CarCollectionItem.propTypes = {
    car: CarShape.isRequired
};

export default CarCollectionItem;
