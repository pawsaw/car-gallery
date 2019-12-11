import React, { useState } from 'react';
import { ImageUrl } from '../../domain/ImageUrl';
import PropTypes from 'prop-types';
import ImageUrlShape from '../shapes/ImageUrlShape';

export interface ImageGalleryProps {
    imageUrls: ImageUrl[];
}

interface OnThumbnailSelected {
    (selectedImageIndex: number): void;
}

function renderImageGallery(imageUrls: ImageUrl[], selectedImageIndex: number, onThumbnailSelected: OnThumbnailSelected): React.ReactElement {
    const selectedImage = (
        <div className="d-flex justify-content-center">
            <img src={imageUrls[selectedImageIndex].fullsize} alt="" className="img-fluid" />
        </div>
    );

    const thumbnails = (
        <div className="row">
            {imageUrls.map(({ thumbnail }, i) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" key={i}>
                    <img src={thumbnail} alt="thumbnail" className={`img-thumbnail ${i === selectedImageIndex ? 'border-primary' : ''}`} onClick={() => onThumbnailSelected(i)}/>
                </div>
            ))}
        </div>
    );

    return (
        <div className="gallery">
            {selectedImage}
            {thumbnails}
        </div>
    )
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls }: ImageGalleryProps) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <div className="container">
            {imageUrls.length ? 
                renderImageGallery(imageUrls, selectedImageIndex, setSelectedImageIndex) 
                : 'No images given.'}
        </div>
    );

};

ImageGallery.propTypes = {
    imageUrls: PropTypes.arrayOf(ImageUrlShape.isRequired).isRequired
};

export default ImageGallery;