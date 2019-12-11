import React, { useState, useEffect } from 'react';
import { Car } from '../../domain/Car';
import { shorten } from '../../utils/textUtils';
import domain from '../../domain/domain';
import { isCarServiceError } from '../../domain/CarService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import PropTypes from 'prop-types';

export interface CarDetailProps {
    id: number;
}

const CarDetail: React.FC<CarDetailProps> = ({ id }: CarDetailProps) => {

    const [car, setCar] = useState<Car | null>(null);
    const [error, setError] = useState('');

    async function loadCarById(id: number) {
        try {
          const carById = await domain.car.findCarById(id);
          setCar(carById);
        } catch (e) {
          if (isCarServiceError(e)) {
            setError(e.message);
          }
        }
      }

    useEffect(() => {
        loadCarById(id);
    }, [id]);

    function renderCar(car: Car): React.ReactElement {

        return (
            <div className="container">
                <h2>{car.title}</h2>
                <div>
                    <h4 className="mt-3">About this car</h4>
                    <p>
                        {shorten(car.description, 100)}
                    </p>
                </div>
                <div>
                    <h4 className="mt-3">Car images</h4>
                    <ImageGallery imageUrls={car.imageUrls} />
                </div>
            </div>
        );
    }

    return (
        <div>
            {error ? <ErrorMessage message={error} /> : '' }
            {car ? renderCar(car) : 'Loading...'}
        </div>
    );

};

CarDetail.propTypes = {
    id: PropTypes.number.isRequired
};

export default CarDetail;