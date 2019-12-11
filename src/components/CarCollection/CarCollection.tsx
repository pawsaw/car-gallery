import React, { Fragment } from 'react';
import CarCollectionItem from './CarCollectionItem/CarCollectionItem';
import { Car } from '../../domain/Car';
import PropTypes from 'prop-types';
import CarShape from '../shapes/CarShape';

export interface CarCollectionProps {
    cars: Car[];
}

const CarCollection: React.FC<CarCollectionProps> = ({ cars }: CarCollectionProps) => {

    return (
        <Fragment>
            <h2>Car Collection</h2>
            <div className="row">
                {cars.map((car) => (
                    <div key={car.id} className="col-12 col-md-4 mb-4">
                        <CarCollectionItem car={car} />
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

CarCollection.propTypes = {
    cars: PropTypes.arrayOf(CarShape.isRequired).isRequired
}

export default CarCollection;