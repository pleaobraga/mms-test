import axios from 'axios';
export const GET_IMAGES = 'GET_IMAGES';

// api to get the images
const API_URL = 'https://jsonplaceholder.typicode.com/photos';


/**
 * functon formate the data to send to redux
 *
 * @param {Array} images
 */
const getAllImagesSuccess = images => ({
    type: GET_IMAGES,
    payload: images
})

/**
* function get all images from api
*
*/
export const getAllImages = () => dispatch => {

    return axios.get(`${API_URL}`)
        .then(response => {
            dispatch(getAllImagesSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}