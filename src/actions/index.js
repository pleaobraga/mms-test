import axios from 'axios';
export const GET_IMAGES = 'GET_IMAGES';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/photos';

const getAllImagesSuccess = images => ({
    type: GET_IMAGES,
    payload: images
})

export const getAllImages = () => dispatch => {

    return axios.get(`${ROOT_URL}`)
        .then(response => {
            dispatch(getAllImagesSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}