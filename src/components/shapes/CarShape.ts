import PropTypes from 'prop-types';
import ImageUrlShape from './ImageUrlShape';

const CarShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(ImageUrlShape.isRequired).isRequired
});

export default CarShape;
