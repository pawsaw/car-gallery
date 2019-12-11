import { Image } from '../api/CarResponse';
import { ImageUrl } from './ImageUrl';

const URL_PROTO = 'https://';
const URL_THUMBNAIL_SUFFIX = '_2.jpg';
const URL_PICTURE_SUFFIX = '_27.jpg';

export default class ImageUrlService {

    imageUrl({ uri }: Image): ImageUrl {

        const thumbnail = `${URL_PROTO}${uri}${URL_THUMBNAIL_SUFFIX}`;
        const fullsize = `${URL_PROTO}${uri}${URL_PICTURE_SUFFIX}`;

        return {
            thumbnail,
            fullsize
        };
    }
}
