import PropTypes from 'prop-types';

const ImageUrlShape = PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    fullsize: PropTypes.string.isRequired
});

export default ImageUrlShape;